// Author: Matt, Purpose: To portray the article cards in a list on the DOM

import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { ArticleCard } from "./ArticleCard";
import { getAllArticles, deleteArticle } from "../../modules/ArticleDataManager";
import { CurrentWeatherCard } from "./MainWeatherCard";
import "./Article.css"

export const ArticleList = () => {
    const [articles, setArticles] = useState([])
    let user = sessionStorage.getItem("nutshell_user")

    const history = useHistory()

    const getArticles = () => {
        return getAllArticles().then(response => {
            setArticles(response)

        })
    }

    const handleDeleteArticle = id => {
        deleteArticle(id)
            .then(() => getAllArticles().then(setArticles))
    }

    useEffect(() => {
        getArticles()
    }, [])




    return (
        <>
            <section className="main-content">
                <section className="main-weather">
                    <CurrentWeatherCard />
                </section>

                <div className="artTitle">
                <h1>Articles</h1>
                    <div className="art-button-move">
                        <button className="articleButton" type="button"
                            onClick={() => { history.push("/create") }}>
                            Add New Article
                        </button>
                    </div>
                </div>
 
                <section className="articles">
                    <div className="article-cards">
                        {articles.map(article => <ArticleCard article={article} key={article.id} handleDeleteArticle={handleDeleteArticle} />)}
                    </div>
                </section>
            </section>

        </>
    )

}