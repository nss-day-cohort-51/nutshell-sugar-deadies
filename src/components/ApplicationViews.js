//Author: Matt, Purpose: To not allow access to user if they are not logged in

import React, {useState} from "react"
import { Route } from "react-router-dom"
import { FriendList } from "./FriendsList"
import { EventList } from "./event/Event"
import { EventForm } from "./event/EventForm"
import { Redirect } from "react-router"
import { TaskForm } from "./task/TaskForm"
import { TaskList } from "./task/TaskList"
import { ArticleList } from "./articles/ArticleList"
import { ArticleForm } from "./articles/ArticlesForm"
import { MessageList } from "./messages/MessageList"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { MessageEditForm } from "./messages/MessageEditForm"
import { ArticleEditForm } from "./articles/ArticleEditForm"
import { TaskEdit } from "./task/TaskEdit"
import { WeatherCard } from "./event/WeatherCard"
import { EventEditForm } from "./event/EventEditForm"
import { AddFriendModal } from "./AddNewFriend"

export const ApplicationViews = ({ isAuthenticated, setAuthUser }) => {
  const [show, setShow] = useState(false)
  return (
    <>
      <Route exact path="/tasks/:taskId(\d+)/edit">
        <TaskEdit /></Route>

      <Route exact path="/">
        {isAuthenticated ? <ArticleList /> : <Redirect to="/login" />}
      </Route>

      <Route path="/create">
        <ArticleForm />
      </Route>

      <Route exact path="/:articleId(\d+)/edit">
        <ArticleEditForm />
      </Route>

      <Route exact path="/login">
        <Login setAuthUser={setAuthUser} />
      </Route>

      <Route path="/register">
        <Register setAuthUser={setAuthUser} />
      </Route>

      <Route path="/friends">
        <FriendList />
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

      <Route exact path="/events/:eventId(\d+)/edit">
        <EventEditForm />
      </Route>

      <Route exact path="/weather">
        <WeatherCard />
      </Route>

      <Route exact path="/tasks">
        <TaskList />
      </Route>

      <Route path="/tasks/create">
        <TaskForm />
      </Route>

    </>
  )
}
