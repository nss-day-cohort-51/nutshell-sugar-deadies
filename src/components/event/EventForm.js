// Author: Morgan, Purpose: To give the user the ability to post a new event

import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { addEvent } from '../../modules/EventManager';
import "./Event.css"

export const EventForm = () => {

    const [interestingEvent, setEvent] = useState({
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

    const handleCancelButton = () => {
        history.push("/events")
    }


    return (
        <form className="eventForm">
            <div className="create-a-event">
            <h2 className="eventForm__title">Add a new event</h2>
            <fieldset className="eventform-fieldset">
                <div className="form-group">
                    <label htmlFor="name">Event Name</label>
                    <input className="eventform" type="text" id="name" onChange={handleControlledInputChange} className="form-control" placeholder="Event name" />
                    </div>
            </fieldset>
            </div>
          
           <fieldset className="eventform-fieldset">
                <div className="form-group">
            <label htmlFor="location">Event Location</label>
                    <input className="eventform" type="text" id="location" onChange={handleControlledInputChange} className="form-control" placeholder="Event Location" />
                   </div>
                    </fieldset>

                <fieldset className="eventform-fieldset">
                <div className="form-group">
                    <label htmlFor="date">Event Date</ label>
                    <input className="eventform" type="datetime-local" id="date" onChange={handleControlledInputChange} className="form-control" placeholder="Event Date" />
                    </div>
                    </fieldset>
                    <div className="save-button-task-move">
            <button className="save-event-button"
                onClick={handleClickSaveEvent}>
                Save Event
            </button>
            <button
                onClick={handleCancelButton} className="save-event-button">
                Cancel
            </button>
            </div>
        </form>
    )
}