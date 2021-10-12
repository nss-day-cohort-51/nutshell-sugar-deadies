// Author: Matt, Purpose: To give the user the ability to post a new article

import React, { useState } from "react";
import { useHistory } from "react-router";
import { addArticle } from "../../modules/ArticleDataManager";
import { formatAMPM } from "../../Date";

export const ArticleForm = () => {
    let user = parseInt(sessionStorage.getItem("nutshell_user"))


    const [article, setArticle] = useState({
        title: "",
        synopsis: "",
        url: "",
        userId: user,
        timestamp: formatAMPM(new Date)
    })

    const history = useHistory()

    const handleControlleInputChange = (event) => {
        const newArticle = { ...article }
        let selectedVal = event.target.value

        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newArticle[event.target.id] = selectedVal
        setArticle(newArticle)
    }

    const handleCancelButton = () => {
        history.push("/")
    }

    const handleClickSaveArticle = (event) => {
        event.preventDefault()

        addArticle(article)
            .then(() => history.push("/"))
    }

    return (

        <form className="articleForm">
            <h1>Add an Article</h1>
            <fieldset>
                <div className="art-title-form-top">
                    <label htmlFor="title">Title:</label>
                    <input size="100" type="text" id="title" onChange={handleControlleInputChange} placeholder="Title" value={article.title} />
                </div>

                <div className="art-title-form">
                    <label htmlFor="synopsis">Synopsis:</label>
                    <input size="100" type="text" id="synopsis" onChange={handleControlleInputChange} placeholder="Synopsis" value={article.synopsis} />
                </div>

                <div className="art-title-form">
                    <label htmlFor="url">URL:</label>
                    <input size="100" type="text" id="url" onChange={handleControlleInputChange} placeholder="URL" value={article.url} />
                </div>
            </fieldset>
            <div className="art-buttons-containter">
            <button className="art-save-button"
                onClick={handleClickSaveArticle}>
                Save
            </button>
            <button className="art-cancel-button"
                onClick={handleCancelButton}>
                Cancel
            </button>
            </div>
        </form>
    )
}