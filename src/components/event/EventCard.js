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
                    <div className="event-posts">
                    <h3 className="event__name"><strong>{event.name}</strong></h3>
                    <div className="event__time">{time}</div>
                    <div className="event__date">{date}</div>
                    <div className="event__location">{event.location}</div>
                    <button class="event-delete-edit" type="button" onClick={() => handleDeleteEvent(event.id)}>Delete</button>
                    <button class="event-delete-edit" type="button"
                    onClick={() => history.push(`/events/${event.id}/edit`)}>
                        Edit
                    </button>
                    </div>
                    <Link to={`/events/${event.id}/edit`}>
                    </Link>
                    <button class="event-delete-edit" type="button" onClick={() => { history.push("/weather") }}>Weather</button>
                </>

                : <>
                <div className="event-posts"> 
                <h3 className="event__name">{event.name}</h3>
                    <div className="event__time">{time}</div>
                    <div className="event__date">{date}</div>
                    <div className="event__location">{event.location}</div>
                    <button class="event-delete-edit" type="button" onClick={() => handleDeleteEvent(event.id)}>Delete</button>
                    <button class="event-delete-edit" type="button"
                    onClick={() => history.push(`/events/${event.id}/edit`)}>
                        Edit
                    </button>
                    </div>
                    <Link to={`/events/${event.id}/edit`}>
                    </Link>
                    <button class="event-delete-edit" type="button" onClick={() => { history.push("/weather") }}>Weather</button>
                </>}
        </section>
    )
}
