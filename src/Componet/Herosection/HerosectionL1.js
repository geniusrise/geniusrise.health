import React, { useEffect, useRef, useState, useCallback } from "react"
import "./style.css"
import { Form } from "react-bulma-components"
import Markdown from "react-markdown"
import axios from "axios"

const QuestionTypes = {
    INITIAL: "initial",
    DEMOGRAPHIC: "demographic",
    FOLLOW_UP: "follow_up",
}

function Herosection1() {
    const [chats, setChats] = useState([])

    const [botIsTyping, setBotIsTyping] = useState(false)
    const [apiResponses, setApiResponses] = useState({})
    const [currentMessage, setCurrentMessage] = useState("")
    var [currentState, setCurrentState] = useState(-1)

    // const [demographics, setDemographics] = useState({})
    // const [followUpQuestions, setFollowUpQuestions] = useState([])
    // const [currentQuestion, setCurrentQuestion] = useState(null)
    // const [waitForAnswer, setWaitForAnswer] = useState(false)

    const chatBoxRef = useRef(null)
    const scrollToBottom = () => {
        const chatBox = chatBoxRef.current
        if (chatBox) {
            chatBox.scrollTop = chatBox.scrollHeight
        }
    }
    useEffect(() => {
        scrollToBottom()
    }, [chats])

    /////////////////////////////// OUTPUT //////////////////////////////////////////

    // add a chat message as a bot
    const addBotMessage = useCallback((message, callback) => {
        // save the message we are about to output
        setChats((prevChats) => [...prevChats, { who: "bot", message: "" }])

        // simulate as if we were typing the message
        simulateBotTyping(message, callback)
    }, [])

    // simulate as if we were stream-typing the message
    const simulateBotTyping = useCallback((botMessage, callback) => {
        // setBotIsTyping(true)
        let i = 0
        let tempMessage = ""
        const typing = setInterval(() => {
            if (i < botMessage.length) {
                tempMessage += botMessage[i]
                setChats((prevChats) => {
                    const newChats = [...prevChats]
                    newChats[newChats.length - 1].message = tempMessage
                    return newChats
                })
                i++
            } else {
                clearInterval(typing)
                // setBotIsTyping(false)
                if (callback) {
                    callback()
                }
            }
        }, 1)
    }, [])

    /////////////////////////////// APIs //////////////////////////////////////////

    const fetchSymptoms = async (userInput) => {
        try {
            const response = await axios.post(
                "http://localhost:2180/api/v1/ner",
                { user_input: userInput },
                { headers: { "Content-Type": "application/json" } }
            )

            setApiResponses((prevState) => ({
                ...prevState,
                symptoms: response.data,
            }))

            fetchSemanticSearch(userInput, response.data.symptoms_diseases)

            const symptomsList = Array.from(new Set(response.data.symptoms_diseases))
                .map((symptom) => `- ${symptom}`)
                .join("\n")

            return `#### Identified symptoms:

${symptomsList}

I will now ask you a series of questions based on your symptoms, starting from basic demographics.

Okay to proceed?`
        } catch (error) {
            console.error("Error fetching symptoms:", error)
            return "Sorry, I encountered an error while fetching your symptoms. Please try again."
        }
    }

    const fetchSemanticSearch = async (userInput, symptoms_diseases) => {
        try {
            const response = await axios.post(
                "http://localhost:2180/api/v1/semantic_search",
                {
                    user_input: userInput,
                    symptoms_diseases: symptoms_diseases,
                    semantic_similarity_cutoff: 0.9,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            )

            setApiResponses((prevState) => ({
                ...prevState,
                semanticSearch: response.data,
            }))
        } catch (error) {
            console.error("Error fetching semantic search:", error)
        }
    }

    const fetchFollowUpQuestions = async (msg, responses) => {
        try {
            console.log(responses)

            const symptoms_diseases = responses.symptoms.symptoms_diseases
            const snomed_concept_ids = responses.semanticSearch.snomed_concept_ids

            const response = await axios.post(
                "http://localhost:2180/api/v1/follow_up",
                {
                    symptoms_diseases: symptoms_diseases,
                    snomed_concept_ids: snomed_concept_ids,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            )

            setApiResponses((prevState) => ({
                ...prevState,
                follow_up: response.data,
            }))

            const followUpQuestions = Array.from(new Set(response.data.map((x) => x.questions).flat()))

            // questionStateMachine.pop()
            // setCurrentState(currentState - 1)
            const newStates = followUpQuestions.map((question) => ({
                type: QuestionTypes.FOLLOW_UP,
                question: question,
                answer: null,
            }))

            setQuestionStateMachine((prevStateMachine) => [...prevStateMachine, ...newStates])

            console.log(followUpQuestions)
            console.log(questionStateMachine)

            return `Thanks, now lets proceed with some questions about your symptoms.

Shall we proceed?
`
        } catch (error) {
            console.error("Error fetching follow-up questions:", error)
            return "Sorry, I encountered an error while fetching follow-up questions. Please try again."
        }
    }

    const generateSummaryReport = async (responses) => {
        try {
            const snomed_concept_ids = responses.semanticSearch.snomed_concept_ids
            const symptoms_diseases = responses.symptoms.symptoms_diseases

            // Prepare the questions and answers object
            const qa = {}
            questionStateMachine.forEach((state) => {
                if (state.answer && state.type == QuestionTypes.FOLLOW_UP) {
                    qa[state.question] = state.answer
                }
            })

            // Send a request to the summary report API
            const response = await axios.post(
                "http://localhost:2180/api/v1/summary",
                {
                    snomed_concept_ids: snomed_concept_ids,
                    symptoms_diseases: symptoms_diseases,
                    qa: qa,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            )

            // Process and display the summary report
            const summaryReport = response.data.summary
            addBotMessage(summaryReport)
        } catch (error) {
            console.error("Error generating summary report:", error)
            addBotMessage("Sorry, I encountered an error while generating your summary report. Please try again.")
        }
    }

    /////////////////////////////// STATE MACHINE //////////////////////////////////////////

    const [questionStateMachine, setQuestionStateMachine] = useState([
        {
            type: QuestionTypes.INITIAL,
            question: `### Hello! 👋

I'm your health assistant at geniusrise.health. I'm here to guide you to the right care, quickly.

Here's how it works:

1. **Share Your Concerns**: Tell me what's bothering you.
2. **Quick Questions**: I'll gather some basic info and ask about your symptoms.
3. **Next Steps**: You'll receive a preliminary report for your doctor and a department recommendation.

So, what brings you here today?`,
            answer: null,
        },
        {
            type: QuestionTypes.INITIAL,
            question: null,
            answer: null,
            action: fetchSymptoms,
        },
        {
            type: QuestionTypes.DEMOGRAPHIC,
            question: "What is your name?",
            answer: null,
        },
        {
            type: QuestionTypes.DEMOGRAPHIC,
            question: "How old are you?",
            answer: null,
        },
        {
            type: QuestionTypes.DEMOGRAPHIC,
            question: "What is your gender?",
            answer: null,
        },
        {
            type: QuestionTypes.FOLLOW_UP,
            question: null,
            answer: null,
            action: fetchFollowUpQuestions,
        },
    ])

    const transition = async (incomingMsg) => {
        let msg = incomingMsg // Rename msg to incomingMsg to avoid shadowing and confusion

        if (currentState === -1) {
            setCurrentState(0)
            const question = questionStateMachine[0].question
            addBotMessage(question)
        } else if (currentState < questionStateMachine.length - 1) {
            console.log(msg)
            setQuestionStateMachine((prevStateMachine) => {
                const updatedStateMachine = [...prevStateMachine]
                updatedStateMachine[currentState].answer = msg
                return updatedStateMachine
            })

            // console.log("*********************************************************************************")
            // console.log(currentState + 1)
            // console.log(questionStateMachine[currentState + 1])

            if (
                questionStateMachine[currentState + 1].type == QuestionTypes.INITIAL &&
                questionStateMachine[currentState + 1].action
            ) {
                const result = await questionStateMachine[currentState + 1].action(msg)
                questionStateMachine[currentState + 1].question = result
            } else if (
                questionStateMachine[currentState + 1].type == QuestionTypes.FOLLOW_UP &&
                questionStateMachine[currentState + 1].action
            ) {
                const result = await questionStateMachine[currentState + 1].action(msg, apiResponses)
                questionStateMachine[currentState + 1].question = result
            }
            // console.log(currentState + 1)
            // console.log(questionStateMachine[currentState + 1])
            // console.log(apiResponses)
            // console.log("*********************************************************************************")

            msg = questionStateMachine[currentState + 1].question
            setCurrentState(currentState + 1)
            addBotMessage(msg)
        } else {
            await generateSummaryReport(apiResponses)
        }
    }

    // useEffect(() => {
    //     console.log(apiResponses)
    // }, [apiResponses])

    const handleKeyDown = async (e) => {
        if (e.key === "Enter") {
            e.preventDefault()
            if (e.shiftKey) {
                setCurrentMessage((prevMessage) => `${prevMessage}\n`)
            } else {
                setChats((prevChats) => [...prevChats, { who: "user", message: currentMessage }])
                setCurrentMessage("")
                await transition(currentMessage)
            }
        }
    }

    useEffect(async () => {
        await transition("")
    }, [])

    return (
        <>
            <section className="hero-banner position-relative custom-py-0 hero-shape1">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-6 col-xl-6 order-lg-1 mb-8 mb-lg-0">
                            {/* <!-- Image --> */}
                            <img src={require("../../assets/images/connectome1.png")} className="img-fluid" alt="..." />
                        </div>
                        <div className="col-12 col-lg-6 col-xl-6">
                            <div className="chat-window">
                                <Form.Field>
                                    <Form.Label className="text-dark text-center">
                                        Try out our in-patient genius.
                                    </Form.Label>
                                </Form.Field>
                                <div className="chat-box" ref={chatBoxRef}>
                                    {chats.map((c, index) =>
                                        c.who === "user" ? (
                                            <div className="chat-bubble text-user" key={index}>
                                                <span className="chat-emoji">
                                                    🙂 <strong>me</strong>
                                                </span>
                                                <Markdown>{c.message}</Markdown>
                                            </div>
                                        ) : (
                                            <div className="chat-bubble text-bot" key={index}>
                                                <span className="chat-emoji">
                                                    🙋‍♂️ <strong>genius</strong>
                                                </span>
                                                <Markdown>{c.message}</Markdown>
                                            </div>
                                        )
                                    )}
                                </div>
                                <Form.Field>
                                    <Form.Label className="text-dark">Write a message, press enter to send.</Form.Label>
                                    <Form.Textarea
                                        rows={2}
                                        value={currentMessage}
                                        disabled={botIsTyping}
                                        onChange={(e) => {
                                            return setCurrentMessage(e.target.value)
                                        }}
                                        onKeyDown={handleKeyDown}
                                    />
                                </Form.Field>
                            </div>
                        </div>
                    </div>
                    {/* <!-- / .row --> */}
                </div>
                {/* <!-- / .container --> */}
            </section>
        </>
    )
}

export default Herosection1
