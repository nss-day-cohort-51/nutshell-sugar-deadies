const URL = "http://localhost:8088"

  export const deleteFriend = (id) => {
	return fetch(`${URL}/friends/${id}`, {
		method: "DELETE"
	}).then(result => result.json())
}

export const addFriend = (newFriend) => {
	return fetch(`${URL}/friends`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(newFriend)
	}).then(response => response.json())
}

export const getAllFriends = () => {
    return fetch(`${URL}/friends?_expand=user`)
    .then(res => res.json())
  }

  
export const getAllUsers = () => {
    return fetch(`${URL}/users`)
    .then(res => res.json())
  }