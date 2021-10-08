import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { ArticleCard } from "./ArticleCard";
import { getAllArticles, deleteArticle } from "./ArticleDataManager";

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
            <section >
                <button type="button"
                    onClick={() => { history.push("/create") }}>
                    New Article
                </button>
            </section>

            <div className="article-cards">

                {articles.map(article => <ArticleCard article={article} key={article.id} handleDeleteArticle={handleDeleteArticle} />)}

            </div>
        </>
    )

}