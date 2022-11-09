import React, { useState } from 'react'
import botImage from './Images/bot.png'
import userImage from './Images/user.png'
import { RiSendPlaneFill } from "react-icons/ri";

const ChatSpace = () => {

    const handelUserMessage = (e) => {
        e.preventDefault();
        setMessage(e.target.value)
    }
    const [message, setMessage] = useState('')

    const sendUserMessage = (e) => {
        e.preventDefault();
        addUserMessage({ message })
        setMessage('')
        dialogFlow(message)
    }

    const suggestion = (e) => {
        e.preventDefault();
        let message = e.target.value
        addUserMessage({ message })
        dialogFlow(message)
    }

    const dialogFlow = (message) => {

        let badwords = ["fuck", "bad", "stupid", "useless", "bitch", "crazy", "nonsense"];

        let welcome = ["hi", "hello", "Hello", "hey", "sup", "yo", "wassup", "whats up", "howdy", "greetings", "good morning", "good afternoon", "good evening"];

        let bye = ["by", "Bye", "goodbye", "see you later", "cya", "goodnight", "goodbye"]

        let thanks = ["Thanks", "thanks", "thank you", "thank you very much", "Thank you very much"];

        let how = ["How are you", "how are you doing", "how are you doing today", "how are you doing today", "How are you", "how are you"];

        let help = ["need help", "i need help", "i am stuck"]

        let response = ["I'm fine", "I am fine", "I am fine today", "I am fine today", "i'm fine", "i'm great", "I'm fine", "I'm great", "I'm good", "i'm good", "great", "Great"];

        let nameAsk = ["What's your name", "what's your name", "What is your name", "what is your name"];

        let ageAsk = ["What's your age", "what's your age", "What is your age", "what is your age", "How old are you", "how old are you"];

        if (badwords.includes(message)) {
            let message = "Please do not use bad words";
            addBotMessage({ message })
        }
        if (welcome.includes(message)) {
            let message = "Hello! How may i help you?";
            addBotMessage({ message })
        }
        if (bye.includes(message)) {
            let message = "Pleasure to help you, have a nice day";
            addBotMessage({ message })
        }
        if (thanks.includes(message)) {
            let message = "You are welcome";
            addBotMessage({ message })
        }
        if (how.includes(message)) {
            let message = "I am fine, thank you";
            addBotMessage({ message })
        }
        if (response.includes(message)) {
            let message = "That is good";
            addBotMessage({ message })
        }
        if (nameAsk.includes(message)) {
            let message = "My name is Bot";
            addBotMessage({ message })
        }
        if (ageAsk.includes(message)) {
            let message = "I don't know about my age";
            addBotMessage({ message })
        }
        if (help.includes(message)) {
            let message = "Ok i will help you please be relax";
            addBotMessage({ message })
        }
    }

    const [appendUserMessage, setAppendUserMessage] = useState([])
    const [appendBotMessage, setAppendBotMessage] = useState([])

    const addUserMessage = (msg) => {
        let newMessage = { ...msg }
        setAppendUserMessage([...appendUserMessage, newMessage])
    }

    const addBotMessage = (msg) => {
        let newMessage = { ...msg }
        setTimeout(() => {
            setAppendBotMessage([...appendBotMessage, newMessage])
        }, 1000);

    }

    return (

        <div className="chat-box my-3 m-auto">

            <div className="header text-light">
                <h1 className='my-2 mx-2 text-center'>AI Assistant</h1>
            </div>

            <div id="content">

                {appendUserMessage.map((msg) => {
                    return (
                        <div className="real-user my-2 mx-2 d-flex flex-row-reverse">
                            <img src={userImage} className="user-image user" alt="user avatar" />
                            <div className="user-msg rounded p-1 text-justify">
                                {msg.message}
                            </div>
                        </div>
                    )
                })}

                {appendBotMessage.map((msg) => {
                    return (
                        <div className="bot-user my-2 mx-2 d-flex ">
                            <img src={botImage} className='user-image bot' alt="bot avatar" />
                            <div className="bot-msg rounded p-1 text-justify">
                                {msg.message}
                            </div>
                        </div>
                    )
                })}

            </div>

            <div className="suggestion-div">
                <button onClick={suggestion} value="Hello" className="btn btn-info btn-sm text-capitalize mx-1">
                    Hello
                </button>
                <button onClick={suggestion} value="Bye" className="btn btn-info btn-sm text-capitalize mx-1">
                    Bye
                </button>
                <button onClick={suggestion} value="i need help" className="btn btn-info btn-sm text-capitalize mx-1">
                    i need help
                </button>
                <button onClick={suggestion} value="What's your name" className="btn btn-info btn-sm text-capitalize mx-1">
                    What's your name
                </button>
            </div>

            <div className="footer d-flex justify-content-center align-items-center m-auto">
                <input
                    style={{ borderRadius: '20px' }}
                    type="text"
                    className='form-control my-2 mx-1 '
                    placeholder='Enter Your Message'
                    name="chat-msg"
                    id="chat-msg"
                    onChange={handelUserMessage}
                    value={message} />
                <button
                    onClick={sendUserMessage}
                    className="p-0 send-msg btn btn-success my-2 mx-1 d-flex justify-content-center align-items-center">
                    <RiSendPlaneFill style={{ width: '22px', height: '22px' }} />
                </button>
            </div>
        </div>
    )
}

export default ChatSpace