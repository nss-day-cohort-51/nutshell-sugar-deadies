// Author: Matt, Purpose: To format the way each article will show on the DOM

import React from "react";
import { useHistory } from "react-router";
import "./Article.css"

export const ArticleCard = ({ article, handleDeleteArticle }) => {
    const history = useHistory()

    return (
        <>
        <section className="article">
            <h3 className="articleTitle">{article.title} </h3>
            <div>{article.synopsis}</div>
            <div><a href={article.url} target="_blank">{article.url}</a></div>
            <div>{article.timestamp}</div>
            <button onClick={() => handleDeleteArticle(article.id)}>Delete</button>
            <button type="button"
                        onClick={() => history.push(`/${article.id}/edit`)}>
                        Edit
                    </button>
        </section>
        <hr></hr>
        </>
    )
}