// Author: Matt, Purpose: To fetch data from the database

const remoteURL = "http://localhost:8088"

export const getAllArticles = () => {
    return fetch(`${remoteURL}/articles?_sort=timestamp&_order=desc`)
    .then(res => res.json())
}

export const getArticleById = (articleId) => {
    return fetch(`${remoteURL}/articles/${articleId}`)
    .then(response => response.json())
    }

export const addArticle = (newArticle) => {
    return fetch(`${remoteURL}/articles`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newArticle)
    }).then(response => response.json())
}

export const deleteArticle = (id) => {
    return fetch(`${remoteURL}/articles/${id}`, {
        method: "DELETE"
    }).then(result => result.json())

}

export const updateArticle = (articleObj) => {
	return fetch(`${remoteURL}/articles/${articleObj.id}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(articleObj)
	}).then(data => data.json());
}