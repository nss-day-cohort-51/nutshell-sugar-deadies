import React from "react"
import { Route } from "react-router-dom"
import { Redirect } from "react-router"
import { ArticleList } from "./articles/ArticleList"
import { ArticleForm } from "./articles/ArticlesForm"
import { MessageList } from "./messages/MessageList"
import {Login} from "./auth/Login"
import { Register} from "./auth/Register"
// import { MessageForm } from "./messages/MessageForm"


export const ApplicationViews = ({isAuthenticated, setAuthUser}) => {
  return (
    <>

      <Route exact path="/">
        {<ArticleList />}
      </Route>

      <Route  path="/create">
        <ArticleForm />
      </Route>

      <Route exact path="/login">
        <Login setAuthUser={setAuthUser} />
      </Route>

      <Route path="/register">
        <Register setAuthUser={setAuthUser} />
      </Route>

      <Route path="/friends">
        {/* Render the component for list of friends */}
      </Route>

      <Route path="/messages">
        <MessageList />
      </Route>

      <Route path="/tasks">
        {/* Render the component for the user's tasks */}
      </Route>

      <Route path="/events">
        {/* Render the component for the user's events */}
      </Route>
    </>
  )
}
