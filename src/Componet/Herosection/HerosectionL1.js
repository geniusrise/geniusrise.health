import React, { useEffect, useRef, useState } from 'react';
import './style.css';

import { Form } from 'react-bulma-components';
import Markdown from 'react-markdown';
import axios from 'axios';

function Herosection1() {
    // chat history
    const [chats, setChats] = useState([]);
    const [currentMessage, setCurrentMessage] = useState('');

    // bot typing waits
    const [botIsTyping, setBotIsTyping] = useState(false);
    const chatBoxRef = useRef(null);

    // all api responses
    const [apiResponses, setApiResponses] = useState({});

    // demographics
    const [demographics, setDemographics] = useState({});
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [waitForAnswer, setWaitForAnswer] = useState(false);

    // follow-up questions
    const [followUpQuestions, setFollowUpQuestions] = useState([]);
    const [currentFollowUpQuestionIndex, setCurrentFollowUpQuestionIndex] = useState(null);

    useEffect(() => {
        addBotMessage(`### Hello! 👋

I'm your health assistant at geniusrise.health. I'm here to guide you to the right care, quickly.

Here's how it works:

1. **Share Your Concerns**: Tell me what's bothering you.
2. **Quick Questions**: I'll gather some basic info and ask about your symptoms.
3. **Next Steps**: You'll receive a preliminary report for your doctor and a department recommendation.

So, what brings you here today?
`);
    }, []);

    useEffect(() => {
        if (chatBoxRef.current) {
            chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
        }
    }, [chats]);

    const addBotMessage = (message, callback) => {
        setChats((prevChats) => [...prevChats, { who: 'bot', message: '' }]);
        simulateBotTyping(message, callback);
    };

    const simulateBotTyping = (botMessage, callback) => {
        setBotIsTyping(true);
        let i = 0;
        let tempMessage = '';
        const typing = setInterval(() => {
            if (i < botMessage.length) {
                tempMessage += botMessage[i];
                setChats((prevChats) => {
                    const newChats = [...prevChats];
                    newChats[newChats.length - 1].message = tempMessage;
                    return newChats;
                });
                i++;
            } else {
                clearInterval(typing);
                setBotIsTyping(false);
                if (callback) {
                    callback();
                }
            }
        }, 10);
    };

    /////////////////////////////// FOLLOW UP //////////////////////////////////////////

    const fetchFollowUpQuestions = async () => {
        try {
            const { snomed_concepts } = apiResponses.semanticSearch;
            const { symptoms_diseases } = apiResponses.symptoms;
            const response = await axios.post(
                'http://localhost:2180/api/v1/follow_up',
                {
                    symptoms_diseases,
                    snomed_concept_ids: snomed_concepts,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            setFollowUpQuestions(response.data);
            setCurrentFollowUpQuestionIndex(0);
        } catch (error) {
            console.error('Error fetching follow-up questions:', error);
            addBotMessage('Sorry, I encountered an error while fetching follow-up questions. Please try again.');
        }
    };

    const askFollowUpQuestion = () => {
        if (currentFollowUpQuestionIndex !== null && currentFollowUpQuestionIndex < followUpQuestions.length) {
            const questionSet = followUpQuestions[currentFollowUpQuestionIndex];
            addBotMessage(questionSet.questions[0], () => {
                setWaitForAnswer(true);
            });
        }
    };

    useEffect(() => {
        if (currentFollowUpQuestionIndex !== null && !waitForAnswer) {
            askFollowUpQuestion();
        }
    }, [currentFollowUpQuestionIndex, waitForAnswer]);

    const handleFollowUpAnswer = (answer) => {
        // Store the answer (you can modify this part to store the answer as you like)
        setWaitForAnswer(false);
        setCurrentFollowUpQuestionIndex((prevIndex) => prevIndex + 1);
    };

    /////////////////////////////// DEMOGRAPHICS //////////////////////////////////////////

    const askDemographicQuestion = (question, key) => {
        addBotMessage(question, () => {
            setCurrentQuestion(key);
            setWaitForAnswer(true); // Set the flag to true after asking a question
        });
    };

    useEffect(() => {
        if (currentQuestion && !waitForAnswer) {
            // Check the flag here
            if (currentQuestion === 'name') {
                askDemographicQuestion('How old are you?', 'age');
            } else if (currentQuestion === 'age') {
                askDemographicQuestion('What is your gender?', 'gender');
            } else if (currentQuestion === 'gender') {
                addBotMessage(`Thank you for providing your details. We can proceed now.`);
            }
        }
    }, [currentQuestion, waitForAnswer]);

    const handleDemographicAnswer = (answer) => {
        setDemographics((prevState) => ({
            ...prevState,
            [currentQuestion]: answer,
        }));
        setWaitForAnswer(false); // Set the flag to false after receiving an answer
    };

    const askDemographics = () => {
        askDemographicQuestion('What is your name?', 'name');
    };

    /////////////////////////////// APIs //////////////////////////////////////////

    const fetchSymptoms = async (userInput) => {
        try {
            const response = await axios.post(
                'http://localhost:2180/api/v1/ner',
                {
                    user_input: userInput,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            const { symptoms_diseases } = response.data;
            setApiResponses((prevState) => ({
                ...prevState,
                symptoms: response.data,
            }));
            const uniqueSymptoms = Array.from(new Set(symptoms_diseases));
            const formattedSymptoms = uniqueSymptoms.join(', ');

            addBotMessage(
                `I've identified the following unique symptoms and diseases based on your input: ${formattedSymptoms}`,
                () => {
                    fetchSemanticSearch(userInput, symptoms_diseases).then(() => {
                        askDemographics(); // Start asking demographic questions after fetchSemanticSearch is done
                    });
                }
            );
        } catch (error) {
            console.error('Error fetching symptoms:', error);
            addBotMessage('Sorry, I encountered an error while fetching your symptoms. Please try again.');
        }
    };

    const fetchSemanticSearch = async (userInput, symptoms_diseases) => {
        try {
            const response = await axios.post(
                'http://localhost:2180/api/v1/semantic_search',
                {
                    user_input: userInput,
                    symptoms_diseases,
                    semantic_similarity_cutoff: 0.9,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            const { snomed_concepts } = response.data;
            setApiResponses((prevState) => ({
                ...prevState,
                semanticSearch: response.data,
            }));
            const allConcepts = snomed_concepts.flat();
            const uniqueConcepts = Array.from(new Set(allConcepts));
            const formattedConcepts = uniqueConcepts.join(', ');
            // addBotMessage(`Based on semantic search, the following unique concepts are related to your symptoms: ${formattedConcepts}`);
        } catch (error) {
            console.error('Error fetching semantic search:', error);
            addBotMessage('Sorry, I encountered an error while performing semantic search. Please try again.');
        }
    };

    /////////////////////////////// USER INPUT //////////////////////////////////////////

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !botIsTyping) {
            e.preventDefault();
            if (e.shiftKey) {
                setCurrentMessage((prevMessage) => `${prevMessage}\n`);
            } else {
                setChats([...chats, { who: 'user', message: currentMessage }]);

                if (currentQuestion) {
                    handleDemographicAnswer(currentMessage);
                } else if (currentFollowUpQuestionIndex !== null) {
                    handleFollowUpAnswer(currentMessage);
                } else {
                    const lowerCaseMessage = currentMessage.toLowerCase().trim();
                    if (lowerCaseMessage === 'hi' || lowerCaseMessage === 'hello' || lowerCaseMessage === 'hey') {
                        addBotMessage('Hi there! How can I assist you today?');
                    } else if (currentMessage.split(' ').length < 3) {
                        addBotMessage('Could you please provide more details?');
                    } else {
                        fetchSymptoms(currentMessage);
                    }
                }

                setCurrentMessage('');
            }
        }
    };

    return (
        <>
            <section className="hero-banner position-relative custom-py-0 hero-shape1">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-5 col-xl-6 order-lg-1 mb-8 mb-lg-0">
                            {/* <!-- Image --> */}
                            <img src={require('../../assets/images/connectome1.png')} className="img-fluid" alt="..." />
                        </div>
                        <div className="col-12 col-lg-7 col-xl-6">
                            <div className="chat-window">
                                <Form.Field>
                                    <Form.Label className="text-dark text-center">
                                        Try out our in-patient genius.
                                    </Form.Label>
                                </Form.Field>
                                <div className="chat-box" ref={chatBoxRef}>
                                    {chats.map((c, index) =>
                                        c.who === 'user' ? (
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
                                            return setCurrentMessage(e.target.value);
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
    );
}

export default Herosection1;
