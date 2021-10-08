import React from "react";

export const MessageCard = ({ message, handleDeleteMessage }) => {
    let user = sessionStorage.getItem("nutshell_username")
    let loggedinuserId = parseInt(sessionStorage.getItem("nutshell_user"))

    if (message.currentUserId === loggedinuserId) {
        return (
            <section className="message">
                <h5 className="messengerName">{message.message}</h5>
                <div>Posted by: {message.messenger}</div>
                <div>{message.timestamp}</div>
                <button onClick={() => handleDeleteMessage(message.id)}>Delete</button>
            </section>
        )
    } else {
        return (

            <section className="message">
                <h3 className="messengerName">{message.message}</h3>
                <div>Posted by: {message.messenger} </div>
                <div>{message.timestamp}</div>
            </section>
        )
    }
}