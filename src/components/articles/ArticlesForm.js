import React, { useState } from "react";
import { useHistory } from "react-router";
import { addArticle } from "./ArticleDataManager";
import { formatAMPM } from "../../Date";

export const ArticleForm = () => {
    let user = parseInt(sessionStorage.getItem("nutshell_user"))

    // function formatAMPM(date) {
    //     const oldDate = new Date(Date.now());
    //     const newDate = oldDate.toDateString();
    //     let hours = date.getHours();
    //     let minutes = date.getMinutes();
    //     let ampm = hours >= 12 ? 'pm' : 'am';
    //     hours = hours % 12;
    //     hours = hours ? hours : 12; // the hour '0' should be '12'
    //     minutes = minutes < 10 ? '0' + minutes : minutes;
    //     var strTime = newDate + " " + hours + ':' + minutes + ' ' + ampm;
    //     return strTime;
    // }

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