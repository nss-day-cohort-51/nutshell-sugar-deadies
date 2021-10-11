import React, {useState, useEffect} from 'react';
import { getAllEvents, deleteEvent } from '../../modules/EventManager';
import { EventCard } from './EventCard';
import { useHistory } from 'react-router-dom';
import "./Event.css"

export const EventList = () => {
 const [events, setEvents] = useState ([]);
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
        <button type="button"
        className="btn"
        onClick={() => {history.push("events/create")}}>
            Add Event
        </button>
        </section>
        <div className="container-cards">
            {events.map((event,index) => <EventCard key={event.id} event={event} 
            handleDeleteEvent={handleDeleteEvent} index={index} />)}
        </div>
    </>
    )
}