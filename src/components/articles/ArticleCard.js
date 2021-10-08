import React from "react";


export const ArticleCard = ({ article, handleDeleteArticle }) => {


    return (
        <section className="article">
            <h3 className="articleTitle">{article.title} </h3>
            <div>{article.synopsis}</div>
            <div><a href={article.url} target="_blank">{article.url}</a></div>
            <div>{article.timestamp}</div>
            <button onClick={() => handleDeleteArticle(article.id)}>Delete</button>
        </section>
    )
}