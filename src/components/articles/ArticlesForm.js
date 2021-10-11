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
            <fieldset>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" onChange={handleControlleInputChange} placeholder="Title" value={article.title} />
                </div>

                <div>
                    <label htmlFor="synopsis">Synopsis:</label>
                    <input type="text" id="synopsis" onChange={handleControlleInputChange} placeholder="Synopsis" value={article.synopsis} />
                </div>

                <div>
                    <label htmlFor="url">URL:</label>
                    <input type="text" id="url" onChange={handleControlleInputChange} placeholder="URL" value={article.url} />
                </div>
            </fieldset>
            <button
                onClick={handleClickSaveArticle}>
                Save
            </button>
            <button
                onClick={handleCancelButton}>
                Cancel
            </button>
        </form>
    )
}