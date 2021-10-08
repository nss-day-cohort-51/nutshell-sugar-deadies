const remoteURL = "http://localhost:8088"
const APIKey = "9f216fcc9206f98d20b2f1d761fb9674"

export const getEventById = (eventId) => {
    return fetch(`${remoteURL}/events/${eventId}`)
        .then(res => res.json())
}

export const getAllEvents = () => {
    return fetch(`${remoteURL}/events?_sort=date&_order=desc`)
        .then(res => res.json())
}

export const deleteEvent = (id) => {
    return fetch(`${remoteURL}/events/${id}`, {
        method: "DELETE"
    }).then(result => result.json())
}

export const addEvent = (newEvent) => {
    return fetch(`${remoteURL}/events`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newEvent)
    }).then(response => response.json())
}

export const getWeather = () => {
    return fetch(
      `api.openweathermap.org/data/2.5/weather?q=London&appid={API key}`
    )
      .then((response) => response.json())
      .then((parsedResponse) => {
        return parsedResponse;
      });
  };