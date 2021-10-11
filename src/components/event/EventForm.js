import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { addEvent } from '../../modules/EventManager';

export const EventForm = () => {
   
    const [interestingEvent, setEvent] = useState ({
        name: "",
        date: "",
        location: ""

    })

    const history = useHistory();

    const handleControlledInputChange = (event) => {
        const newEvent = { ...interestingEvent }
        let selectedVal = event.target.value
        
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newEvent[event.target.id] = selectedVal
        setEvent(newEvent)
    }
    const handleClickSaveEvent = (event) => {
        event.preventDefault()
        addEvent(interestingEvent)
        .then(() => history.push("/events"))
    }


return (
    <form className="eventForm">
        <h2 className="eventForm__title">New Event</h2>
        <fieldset>
            <div className="form-group">
                <label htmlFor="name">Event Name</label>
                <input className="eventform" type="text" id="name" onChange={handleControlledInputChange} className="form-control" placeholder="Event name" />
                <label htmlFor="location">Event Location</label>
                <input className="eventform" type="text" id="location" onChange={handleControlledInputChange} className="form-control" placeholder="Event Location" />
                <label htmlFor="date">Event Date</ label>
                <input className="eventform" type="datetime-local" id="date" onChange={handleControlledInputChange} className="form-control" placeholder="Event Date" />
            </div>
            </fieldset>
            <button className="btn btn-primary"
				onClick={handleClickSaveEvent}>
				Save Event
          </button>
    </form>
)
}