// Author: Morgan, Purpose: To format the way each event will show on the DOM
import React from "react";
import "./Event.css"
import { Link } from "react-router-dom"
import { useHistory } from "react-router";



export const EventCard = ({ event, handleDeleteEvent, index }) => {
    const [date, time] = event.date.split("T")
    const history = useHistory();
    

    const readableDate = new Date(event.date).toLocaleDateString();
    const readableTime = new Date(event.date).toLocaleTimeString([], {timeStyle: 'short'});

    
    return (
        <section className="event">
            {index === 0 ?
                <>
                    <div className="event-posts">
                    <h3 className="event__name"><strong>{event.name}</strong></h3>
                    <div className="event__time">{readableTime}</div>
                    <div className="event__date">{readableDate}</div>
                    <div className="event__location">{event.location}</div>
                    
                    <button class="event-delete-edit" type="button" onClick={() => handleDeleteEvent(event.id)}>Delete</button>
                    <button class="event-delete-edit" type="button"
                    onClick={() => history.push(`/events/${event.id}/edit`)}>
                        Edit
                    </button>
                    <button class="event-delete-edit" type="button" onClick={() => { history.push("/weather") }}>Weather</button>
                    </div>
                    <hr></hr>
                    <Link to={`/events/${event.id}/edit`}>
                    </Link>
                
                </>

                : <>
                <div className="event-posts"> 
                <h3 className="event__name">{event.name}</h3>
                    <div className="event__time">{readableTime}</div>
                    <div className="event__date">{readableDate}</div>
                    <div className="event__location">{event.location}</div>
                    <button class="event-delete-edit" type="button" onClick={() => handleDeleteEvent(event.id)}>Delete</button>
                    <button class="event-delete-edit" type="button"
                    onClick={() => history.push(`/events/${event.id}/edit`)}>
                        Edit
                    </button>
                    <button class="event-delete-edit" type="button" onClick={() => { history.push("/weather") }}>Weather</button>
                    </div>
                    <hr></hr>
                    <Link to={`/events/${event.id}/edit`}>
                    </Link>
                </>}
        </section>
    )
}
