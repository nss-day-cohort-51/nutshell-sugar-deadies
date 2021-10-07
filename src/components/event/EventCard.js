import React from "react";
import "./Event.css"

export const EventCard = ({ event, handleDeleteEvent }) => {
    return (
    <section className="event">
       <h3 className="event__name">{event.name}</h3>
       <div className="event__date">{event.date}</div>
       <div className="event__location">{event.location}</div>
       <button type="button">Show Weather</button> 
       <button type="button" onClick={() => handleDeleteEvent(event.id)}>Delete</button>
    </section>
)
}