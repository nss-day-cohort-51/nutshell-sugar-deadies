//Author: Matt, Purpose: To give the user the ability to edit
import React, { useState, useEffect } from "react"
import { getMessageById, updateMessage } from "../../modules/MessageDataManager"
import { useParams, useHistory } from "react-router"
import "./Message.css"

export const MessageEditForm = () => {
    const [message, setMessage] = useState({ message: "" })
    const [isLoading, setIsLoading] = useState(false)

    const { messageId } = useParams()
    const history = useHistory()

    const handleFieldChange = event => {
        const stateToChange = { ...message }
        stateToChange[event.target.id] = event.target.value;
        setMessage(stateToChange)
    }

    const handleCancel = () => {
        history.push("/messages")
    }

    const updateExistingMessage = event => {
        event.preventDefault()
        setIsLoading(true)

        const editedMessage = {
            id: messageId,
            message: message.message,
            messenger: message.messenger,
            timestamp: message.timestamp,
            userId: message.userId
        }

        updateMessage(editedMessage)
            .then(() => history.push("/messages"))
    }

    useEffect(() => {
        getMessageById(messageId)
            .then(message => {
                setMessage(message)
                setIsLoading(false)
            })
    }, [])

    return (
        <>
        
            <section className="message">
                <h1>Edit Message</h1>
                <div className="message-edit-details-container">
            <div className="message-edit-details">
                <h5 className="messengerName">{message.message}</h5></div>
                <div className="message-edit-details-2">Posted by: {message.messenger}</div>
                <div className="message-edit-details-3">{message.timestamp}</div>
                </div>
            </section>

            <form className="message">

            <label className="update-message-header" htmlFor="message">Update Message:</label>
                <fieldset className="message-edit-form">
                    
                    <input type="text" id="message" onChange={handleFieldChange} placeholder="Enter New Message" size= "100" value={message.message} />
                </fieldset>

                <div className="message-buttons-container">
                    <button className="message-update-button" type="button" disabled={isLoading} onClick={updateExistingMessage}>Update</button>
                    <button className="message-cancel-button" onClick={handleCancel}> Cancel </button>
                </div>
            </form>
        </>
    )
}