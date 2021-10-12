// Author: Morgan, Purpose: To portray the event cards in a list on the DOM

import React, { useState, useEffect } from 'react';
import { getAllEvents, deleteEvent } from '../../modules/EventManager';
import { EventCard } from './EventCard';
import { useHistory } from 'react-router-dom';
import "./Event.css"

export const EventList = () => {
    const [events, setEvents] = useState([]);
    const history = useHistory();

    const getEvents = () => {
        return getAllEvents().then(eventsFromAPI => {
            setEvents(eventsFromAPI);
        })
    }

    const handleDeleteEvent = id => {
        deleteEvent(id)
            .then(() => getAllEvents().then(setEvents))
    }

    useEffect(() => {
        getEvents();
    }, []);

    return (
        <>
            <section className="section-content">

                <section>
                    <h1>Events</h1>
                    <div className="eventbutton">
                        <button className="eventcreate-button"
                            onClick={() => { history.push("events/create") }}>
                            Add Event</button>
                    </div>
                </section>

            </section>
            <div className="container-cards">
                {events.map((event, index) => <EventCard key={event.id} event={event}
                    handleDeleteEvent={handleDeleteEvent} index={index} />)}
            </div>
        </>
    )
}