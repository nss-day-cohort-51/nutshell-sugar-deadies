// Author: Matt, Purpose: To format the way each message will show on the DOM
import "./Message.css"
import React from "react";
import { useHistory } from "react-router";

export const MessageCard = ({ message, handleDeleteMessage }) => {
    const history = useHistory()
    let loggedinuserId = parseInt(sessionStorage.getItem("nutshell_user"))
    

    if (message.currentUserId === loggedinuserId) {
        return (
            <>
                <section className="message">
                <hr></hr>
                    <h5 className="messengerName">{message.message}</h5>
                    <div>Posted by: {message.messenger}</div>
                    <div>{message.timestamp}</div>
                    <div className="message-update-buttons">
                    <button className="message-delete-button" onClick={() => handleDeleteMessage(message.id)}>Delete</button>
                    <button className="message-edit-button" type="button"
                        onClick={() => history.push(`/messages/${message.id}/edit`)}>
                        Edit
                    </button>
                    </div>
                    <hr></hr>
                </section>

            </>
        )
    } else {
        return (
            
            <section className="message">
                <h5 className="messengerName">{message.message}</h5>
                <div>Posted by: {message.messenger} </div>
                <div>{message.timestamp}</div>
            </section>
            


        )

    }
}