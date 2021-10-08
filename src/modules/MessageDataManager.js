const remoteURL = "http://localhost:8088"

export const getAllMessages = () => {
   return fetch(`${remoteURL}/messages`)
    .then(response => response.json())
}

export const addMessage = (newMessage) => {
    return fetch(`${remoteURL}/messages`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newMessage)
    }).then(response => response.json())
}

export const deleteMessage = (id) => {
    return fetch(`${remoteURL}/messages/${id}`, {
        method: "DELETE"
    }).then(result => result.json())

}