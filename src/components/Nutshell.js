import React, {useState} from "react"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
import "./Nutshell.css"

export const Nutshell = () => {
  
        const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("nutshell_user") !== null)

        const setAuthUser = (user) => {
          sessionStorage.setItem("nutshell_user", user.id)
          sessionStorage.setItem("nutshell_username", user.name)
          setIsAuthenticated(sessionStorage.getItem("nutshell_user") !== null)
        }

        const clearUser = () => {
          sessionStorage.clear();
          setIsAuthenticated(sessionStorage.getItem("nutshell_user") !== null)
        }



       
          return (
            <>
              <NavBar clearUser={clearUser} setAuthUser={setAuthUser}/>
              <ApplicationViews setAuthUser={setAuthUser} isAuthenticated={isAuthenticated}/>
            </>
          )
     
}
