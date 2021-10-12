//Author: Matt, Purpose: To allow the user to edit an Article

import React, { useState, useEffect } from "react"
import { getArticleById, updateArticle } from "../../modules/ArticleDataManager"
import { useParams, useHistory } from "react-router"
import "./Article.css"

export const ArticleEditForm = () => {
    const [article, setArticle] = useState({ title: "", synopsis: "", url: "" })
    const [isLoading, setIsLoading] = useState(false)

    const { articleId } = useParams()
    const history = useHistory()

    const handleFieldChange = event => {
        const stateToChange = { ...article }
        stateToChange[event.target.id] = event.target.value;
        setArticle(stateToChange)
    }

    const handleCancel = () => {
        history.push("/")
    }

    const updateExistingArticle = event => {
        event.preventDefault()
        setIsLoading(true)

        const editedArticle = {
            id: articleId,
            title: article.title,
            synopsis: article.synopsis,
            url: article.url,
            timestamp: article.timestamp,
            userId: article.userId
        }

        updateArticle(editedArticle)
            .then(() => history.push("/"))
    }

    useEffect(() => {
        getArticleById(articleId)
            .then(article => {
                setArticle(article)
                setIsLoading(false)
            })
    }, [])

    return (
        <>
            <section className="articleForm">
                <h1>Edit Article</h1>
                <div className="art-titles">
            <section >
                <h3 className="articleTitle">{article.title} </h3>
                <div>{article.synopsis}</div>
                <div><a href={article.url} target="_blank">{article.url}</a></div>
            </section>
            </div>


            <form >
                <fieldset >
                    <div className="art-edit-fieldset-1">
                        <label htmlFor="title">Title:</label>
                        <input size="200" type="text" id="title" onChange={handleFieldChange} placeholder="Title" value={article.title} />
                    </div>

                    <div className="art-edit-fieldset">
                        <label htmlFor="synopsis">Synopsis:</label>
                        <input size="200" type="text" id="synopsis" onChange={handleFieldChange} placeholder="Synopsis" value={article.synopsis} />
                    </div>

                    <div className="art-edit-fieldset">
                        <label htmlFor="url">URL:</label>
                        <input size="200" type="text" id="url" onChange={handleFieldChange} placeholder="URL" value={article.url} />
                    </div>

                    <div className="art-edit-fieldset-buttons">
                        <button className="art-edit-update-button" type="button" disabled={isLoading} onClick={updateExistingArticle}>Update</button>
                        <button className="art-cancel-update-button" onClick={handleCancel}> Cancel </button>
                    </div>
                </fieldset>
            </form>
            </section>
        </>
    )
}