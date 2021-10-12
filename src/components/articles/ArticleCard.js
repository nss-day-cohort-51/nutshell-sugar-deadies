// Author: Matt, Purpose: To format the way each article will show on the DOM

import userEvent from "@testing-library/user-event";
import React, { useImperativeHandle } from "react";
import { useHistory, useParams } from "react-router";
import "./Article.css"

export const ArticleCard = ({ article, handleDeleteArticle }) => {
    const history = useHistory()

    // const user = () => {
    //     user = JSON.parse(loggedInUser);
    
   
        

    return (
        <>
      
        <div className="article-section">
        <section className="article">
            <h3 className="articleTitle">{article.title} </h3>
            <div>{article.synopsis}</div>
            <div><a href={article.url} target="_blank">{article.url}</a></div>
            <div>{article.timestamp}</div>
            <button className="article-delete-edit" onClick={() => handleDeleteArticle(article.id)}>Delete</button>
            <button className="article-delete-edit" type="button"
                        onClick={() => history.push(`/${article.id}/edit`)}>
                        Edit
                    </button>
        </section>
        <hr></hr>
        </div>
        </>
    )
}