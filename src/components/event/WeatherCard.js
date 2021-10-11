import React, { useEffect, useState } from "react";
import { getWeather } from "../../modules/EventManager"


export const  WeatherCard = () => {
    const [weather, setWeather] = useState([])
    
    const getEventWeather = () => {
        return getWeather().then(response => {
            setWeather(response)
        })

   
    }


    useEffect(() => {
        getEventWeather()
    }, [])
    
    return (
        <section className="weather">
            <h3>weather</h3>
            { weather.main &&
            <>
            <p className="city__name">City: {weather.name}</p>
            <p className="weather__visibility">Visibility: {weather.weather[0].main}</p>
            <p className="weather__description">Discription: {weather.weather[0].description}</p>
            <p className="weather__temp">Temperature: {Math.round(weather.main.temp)}</p>
            </>
}    
        </section>
    )
}
