import React from "react";
import "./Event.css"
import { Link } from "react-router-dom"
import { useHistory } from "react-router";



export const EventCard = ({ event, handleDeleteEvent, index }) => {
    const [date, time] = event.date.split("T")
    const history = useHistory();
    return (
        <section className="event">
            {index === 0 ?
                <>
                    <h3 className="event__name"><strong>{event.name}</strong></h3>
                    <div className="event__time">time: {time}</div>
                    <div className="event__date">date: {date}</div>
                    <div className="event__location">{event.location}</div>
                    <button type="button" onClick={() => handleDeleteEvent(event.id)}>Delete</button>
                    <button type="button"
                        className="btn"
                        onClick={() => { history.push("/weather") }}>
                        Show Weather
                    </button>
                    <Link to={`/events/${event.id}/edit`}>
                        <button>Edit</button>
                    </Link>
                </>

                : <> <h3 className="event__name">{event.name}</h3>
                    <div className="event__time">time: {time}</div>
                    <div className="event__date">date: {date}</div>
                    <div className="event__location">{event.location}</div>
                    <button type="button" onClick={() => handleDeleteEvent(event.id)}>Delete</button>
                    <button type="button"
                        className="btn"
                        onClick={() => { history.push("/weather") }}>
                        Show Weather
                    </button>
                    <Link to={`/events/${event.id}/edit`}>
                        <button>Edit</button>
                    </Link>
                </>}
        </section>
    )
}
