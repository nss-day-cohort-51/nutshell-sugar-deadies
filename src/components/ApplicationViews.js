import React from "react"
import { Route } from "react-router-dom"
import { TaskForm } from "./task/TaskForm"
import { TaskList } from "./task/TaskList"
import { ArticleList } from "./articles/ArticleList"
import { ArticleForm } from "./articles/ArticlesForm"


export const ApplicationViews = () => {
  return (
    <>

      <Route exact path="/">
        <ArticleList />
      </Route>

      <Route  path="/create">
        <ArticleForm />
      </Route>

      <Route path="/friends">
        {/* Render the component for list of friends */}
      </Route>
      <Route path="/messages">
        {/* Render the component for the messages */}
      </Route>
      <Route exact path="/tasks">
        <TaskList />
      </Route>
      <Route path="/tasks/create">
        <TaskForm />
      </Route>
      <Route path="/events">
        {/* Render the component for the user's events */}
      </Route>

    </>
  )
}
