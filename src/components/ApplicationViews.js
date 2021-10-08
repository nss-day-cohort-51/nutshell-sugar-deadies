import React from "react"
import { Route } from "react-router-dom"
import { EventList } from "./event/Event"
import { EventForm } from "./event/EventForm"
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
      <Route path="/tasks">
  
      </Route>
      <Route exact path="/events">
        <EventList />
      </Route>

      <Route path="/events/create">
        <EventForm />
      </Route>


    </>
  )
}
