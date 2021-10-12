//Author: Matt, Purpose: to render the messages in a list, also be able to create new message

import React, { useState, useEffect } from "react";
import { MessageCard } from "./MessageCard";
import { useHistory } from "react-router";
import { getAllMessages } from "../../modules/MessageDataManager"
import { addMessage, deleteMessage } from "../../modules/MessageDataManager";
import { formatAMPM } from "../../Date";
import "./Message.css"

export const MessageList = () => {
    let user = parseInt(sessionStorage.getItem("nutshell_user"))
    const messenger = sessionStorage.getItem("nutshell_username")

    const history = useHistory()

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

    const handleClickSaveNewMessage = (event) => {
        event.preventDefault()
        console.log("save")
        addMessage(message)
            .then(() => {
                setMessage({
                    currentUserId: user,
                    messenger: messenger,
                    message: "",
                    timestamp: formatAMPM(new Date)
                })
                getMessages()
            })

    }



    return (
        <>
            <div className="message-form-container">
                <form >
                    <fieldset className="messageForm">
                        <div>
                            <label htmlFor="message">Enter New Message: </label>
                            <input type="text" id="message" onChange={handleControlledInputChange} placeholder="Enter Message" size="50" value={message.message} />
                        </div>
                        <button onClick={handleClickSaveNewMessage}>Save</button>
                    </fieldset>
                </form>
            </div>



            <div className="message-cards">
                <h1>Chat</h1>
                {messages.map(message => <MessageCard handleDeleteMessage={handleDeleteMessage} key={message.id} message={message} />)}
            </div>
        </>
    )
}
