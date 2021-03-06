//Author: Morgan, Purpose: To allow the user to edit an event

import React, { useState, useEffect } from "react"
import { getEventById } from "../../modules/EventManager"
import { useParams, useHistory } from "react-router"
import { updateEvent } from "../../modules/EventManager"
import "./Event.css"

export const EventEditForm = () => {
  const [event, setEvent] = useState({
    name: "", date: "", location: ""
  })
  const [isLoading, setIsLoading] = useState(false);

  const { eventId } = useParams();
  const history = useHistory();

  const handleFieldChange = evt => {
    const stateToChange = { ...event };
    stateToChange[evt.target.id] = evt.target.value;
    setEvent(stateToChange);
  };

  const handleCancel = () => {
    history.push("/events")
  }

  const updateExistingEvent = evt => {
    evt.preventDefault()
    setIsLoading(true);


    const editedEvent = {
      id: eventId,
      name: event.name,
      location: event.location,
      date: event.date,

    };

    updateEvent(editedEvent)
      .then(() => history.push("/events")
      )
  }

  useEffect(() => {
    getEventById(eventId)
      .then(event => {
        setEvent(event);
        setIsLoading(false)
      });
  }, []);

  return (
    <>
      <form>
        <fieldset>
          <div className="edit-form-container">
            <div className="formgrid">
              <label htmlFor="name">Event Name</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={handleFieldChange}
                id="name"
                value={event.name}
              />
              <label htmlFor="name">Event Name</label>
              <input
                type="datetime-local"
                required
                className="form-control"
                onChange={handleFieldChange}
                id="date"
                value={event.date}
              />
              <label htmlFor="name">Event Date</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={handleFieldChange}
                id="location"
                value={event.location}
              />
              <label htmlFor="location">Location</label>
            </div>
            
              
              <button
                type="button" disabled={isLoading}
                onClick={updateExistingEvent}
                className="event-update-button">Submit</button>
              <button onClick={handleCancel} className="event-cancel-button"> Cancel </button>
            <div className="alignRight">
            </div>
          </div>
        </fieldset>
      </form>
    </>
  );
}