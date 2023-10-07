import React, { useEffect, useRef, useState } from 'react'
import "./style.css"

import {Form} from 'react-bulma-components'
import Markdown from 'react-markdown'
import axios from 'axios'

function FeatureL1() {

  const gototop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [chats, setChats] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [botIsTyping, setBotIsTyping] = useState(false);
  const chatBoxRef = useRef(null);

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

  const addBotMessage = (message) => {
    setChats(prevChats => [...prevChats, { who: "bot", message: "" }]);
    simulateBotTyping(message);
  };

  const simulateBotTyping = (botMessage) => {
    setBotIsTyping(true);
    let i = 0;
    let tempMessage = "";
    const typing = setInterval(() => {
      if (i < botMessage.length) {
        tempMessage += botMessage[i];
        setChats(prevChats => {
          const newChats = [...prevChats];
          newChats[newChats.length - 1].message = tempMessage;
          return newChats;
        });
        i++;
      } else {
        clearInterval(typing);
        setBotIsTyping(false);
      }
    }, 30);
  };

  const fetchSymptoms = async (userInput) => {
    try {
      const response = await axios.post('http://localhost:2180/api/v1/ner', {
        user_input: userInput
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const { symptoms_diseases } = response.data;
      const formattedSymptoms = symptoms_diseases.join(', ');
      addBotMessage(`I've identified the following symptoms and diseases based on your input: ${formattedSymptoms}`);
    } catch (error) {
      console.error('Error fetching symptoms:', error);
      addBotMessage('Sorry, I encountered an error while fetching your symptoms. Please try again.');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !botIsTyping) {
      e.preventDefault();
      if (e.shiftKey) {
        setCurrentMessage(prevMessage => `${prevMessage}\n`);
      } else {
        setChats([...chats, { who: "user", message: currentMessage }]);

        const lowerCaseMessage = currentMessage.toLowerCase().trim();
        if (lowerCaseMessage === 'hi' || lowerCaseMessage === 'hello' || lowerCaseMessage === 'hey') {
          addBotMessage("Hi there! How can I assist you today?");
        } else if (currentMessage.split(" ").length < 3) {
          addBotMessage("Could you please provide more details?");
        } else {
          fetchSymptoms(currentMessage);
        }

        setCurrentMessage("");
      }
    }
  };

  return (
    <>
      <section class="feature-background">
        <div class="container feature-content">
          <div
            class="row justify-content-between align-items-center mb-4 mb-lg-0"
          >
            <div class="col-lg-7 col-md-5">
              <div>
                <div className='chat-window'>
                  <Form.Field>
                    <Form.Label className="text-dark text-center">Try out our in-patient genius.</Form.Label>
                  </Form.Field>
                    <div className='chat-box'  ref={chatBoxRef}>
                      {chats.map((c, index) => (
                        c.who === "user" ? (
                          <div className='chat-bubble text-user' key={index}>
                            <span className='chat-emoji'>🙂 <strong>me</strong></span>
                            <Markdown>
                              {c.message}
                            </Markdown>
                          </div>
                        ) : (
                          <div className='chat-bubble text-bot' key={index}>
                            <span className='chat-emoji'>🙋‍♂️ <strong>genius</strong></span>
                            <Markdown>
                              {c.message}
                            </Markdown>
                          </div>
                        )
                      ))}
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
            <div class="col-lg-4 col-md-7">
              <div class="p-5 feature-hover active position-relative">
                <div class="f-icon"><i class="flaticon-prototype"></i></div>
                {/* <img src={require("../../../../assets/icon/feedback.png")} className='cimg' /> */}
                <h4 class="mt-4 mb-3">In - patient and Out - patient interactions</h4>
                <p class="mb-0 custom-description-text">
                  Collect relevant information from incoming patients, ask relevant follow-up questions
                  and guide the patient to the right department. Provide clear and detailed action items
                  from diagnosis and discharge summaries.
                </p>
              </div>
            </div>
          </div>
          <div class="row mt-lg-n5 align-items-center">
            <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <div class="p-5 feature-hover position-relative">
                <div class="f-icon"><i class="flaticon-knowledge"></i></div>
                <h4 class="mt-4 mb-3">Patient - Establishment interactions</h4>
                <p class="mb-0 custom-description-text">
                  Empower staff, lab techs and other personnel with relevant information about the patient,
                  predict resource utilization before patient checks into the premises.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <div class="p-5 feature-hover position-relative">
                <div class="f-icon"><i class="flaticon-thumbs-up"></i></div>
                <h4 class="mt-4 mb-3">Patient - Doctor interactions</h4>
                <p class="mb-0 custom-description-text">
                  Empower doctors with all the relevant information about the patient,
                  and help with decision support to make the right testing diagnostic and treatment choices.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-12 text-center">
              <div class="btn btn-primary mt-lg-8" onClick={gototop}>
                And Many More
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FeatureL1
