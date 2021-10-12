//Author: Matt, Purpose: to render the messages in a list, also be able to create new message

import React, { useState, useEffect } from "react";
import { MessageCard } from "./MessageCard";
import { getAllMessages } from "../../modules/MessageDataManager"
import { addMessage, deleteMessage } from "../../modules/MessageDataManager";
import { formatAMPM } from "../../Date";
import "./Message.css"

export const MessageList = () => {
    let user = parseInt(sessionStorage.getItem("nutshell_user"))
    const messenger = sessionStorage.getItem("nutshell_username")

    const [messages, setMessages] = useState([])

    const [message, setMessage] = useState({
        currentUserId: user,
        messenger: messenger,
        message: "",
        timestamp: formatAMPM(new Date)
    })


    const getMessages = () => {
        return getAllMessages().then(response => {
            setMessages(response)
        })
    }
    

    const handleDeleteMessage = id => {
        deleteMessage(id)
        .then(() => getAllMessages().then(setMessages))
    }

    useEffect(() => {
        getMessages()
    }, [])

    const handleControlledInputChange = (event) => {
        const newMessage = { ...message }
        let selectedVal = event.target.value

        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newMessage[event.target.id] = selectedVal
        setMessage(newMessage)
    }

    const handleClickSaveMessage = (event) => {
        event.preventDefault()

        addMessage(message)
            .then(() => window.location.reload())
    }



    return (
        <>
        <h1>Messages</h1>
        <div >
            <form >
                <fieldset className="messageForm">
                    <div>
                        <label htmlFor="message"> </label>
                        <input type="text" id="message" onChange={handleControlledInputChange} placeholder="Enter Message for the chat" size="50" value={message.messages} />
                    </div>
                    <button className="message-save-button"
                        onClick={handleClickSaveMessage}>
                        Save
                    </button>
                </fieldset>
            </form>
            </div>
            <h2 className="chat-header">Chat</h2>
           

            <div className="message-cards">
            <hr></hr>
            
                {messages.map(message => <MessageCard handleDeleteMessage={handleDeleteMessage} key={message.id} message={message} />)}
            </div>
            
           
        </>
    )
}
