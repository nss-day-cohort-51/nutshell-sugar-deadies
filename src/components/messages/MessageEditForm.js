import React, { useState, useEffect } from "react"
import { getMessageById, updateMessage } from "../../modules/MessageDataManager"
import { useParams, useHistory } from "react-router"


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
            currentUserId: message.currentUserId
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
                <h5 className="messengerName">{message.message}</h5>
                <div>Posted by: {message.messenger}</div>
                <div>{message.timestamp}</div>
            </section>

            <form>
                <fieldset>
                    <label htmlFor="message">Update Message:</label>
                    <input type="text" id="message" onChange={handleFieldChange} placeholder="Enter New Message" value={message.message} />
                </fieldset>

                <div >
                    <button type="button" disabled={isLoading} onClick={updateExistingMessage}>Update</button>
                    <button onClick={handleCancel}> Cancel </button>
                </div>
            </form>
        </>
    )
} 