//Author: Matt, Purpose: To not allow access to user if they are not logged in

import React from "react"
import { Route } from "react-router-dom"
import { EventList } from "./event/Event"
import { EventForm } from "./event/EventForm"
import { Redirect } from "react-router"
import { TaskForm } from "./task/TaskForm"
import { TaskList } from "./task/TaskList"
import { ArticleList } from "./articles/ArticleList"
import { ArticleForm } from "./articles/ArticlesForm"
import { MessageList } from "./messages/MessageList"
import { Login } from "./auth/Login"
import {Register} from "./auth/Register"
import { MessageEditForm } from "./messages/MessageEditForm"




export const ApplicationViews = ({isAuthenticated, setAuthUser}) => {
  return (
    <>

      <Route exact path="/">
        {isAuthenticated ? <ArticleList /> : <Redirect to="/login" />}
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

      <Route exact path="/messages">
        <MessageList />
      </Route>

      <Route exact path="/messages/:messageId(\d+)/edit">
        <MessageEditForm />
      </Route>
      <Route path="/tasks">
  
      </Route>
      <Route exact path="/events">
        <EventList />
      </Route>

      <Route path="/events/create">
        <EventForm />
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
