import React from "react"
import { Route } from "react-router-dom"
import { FriendList } from "./FriendsList"

export const ApplicationViews = () => {
  
  return (
    <>

      <Route exact path="/">
        {/* Render the component for news articles */}
      </Route>
      <Route path="/friends">
        <FriendList />
      </Route>
      <Route path="/messages">
        {/* Render the component for the messages */}
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
