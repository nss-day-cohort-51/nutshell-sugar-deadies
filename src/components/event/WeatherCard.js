//Author: Morgan, Purpose: To format the way the weather will show on the DOM

import React, { useEffect, useState } from "react";
import { getWeather } from "../../modules/EventManager"
import "./Event.css"


export const WeatherCard = () => {
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
            <h3>Weather</h3>
            {weather.main &&
                <>
                    <span>Temp: {Math.round(weather.main.temp)}</span>
                    <p>{weather.weather[0].description}</p>
                    <div className="icon">
                        <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
                    </div>
                </>
            }
        </section>
    )
}
