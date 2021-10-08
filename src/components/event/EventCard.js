import React from "react";
import "./Event.css"



export const EventCard = ({ event, handleDeleteEvent, index }) => {
    const [date, time] = event.date.split("T")
    return (
        <section className="event">
        { index === 0 ? 
        <>
       <h3 className="event__name"><strong>{event.name}</strong></h3>
       <div className="event__time">time: {time}</div>
       <div className="event__date">date: {date}</div>
       <div className="event__location">{event.location}</div>
       <button type="button">Show Weather</button> 
       <button type="button" onClick={() => handleDeleteEvent(event.id)}>Delete</button>
       </>

        : <> <h3 className="event__name">{event.name}</h3>
        <div className="event__time">time: {time}</div>
        <div className="event__date">date: {date}</div>
        <div className="event__location">{event.location}</div>
        <button type="button">Show Weather</button> 
        <button type="button" onClick={() => handleDeleteEvent(event.id)}>Delete</button>
        </> }
        </section>
    )}
