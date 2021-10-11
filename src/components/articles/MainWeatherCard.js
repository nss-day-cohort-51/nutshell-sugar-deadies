import React, { useEffect, useState } from "react";
import { getCurrentWeather } from "../../modules/ArticleDataManager";

export const CurrentWeatherCard = () => {
    const [weather, setWeather] = useState([])

    const getWeather = () => {
        return getCurrentWeather().then(response => {
            setWeather(response)
        })
    }

    useEffect(() => {
        getWeather()
    }, [])

    return (
        <section className="weatherCard">
            <h3 >Todays Weather</h3>

            {weather.main &&
                <>
                    <span>Temp: {Math.round(weather.main.temp)}</span>
                    <p>Description: {weather.weather[0].description}</p>
                    <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
                </>
            }

        </section>
    )
}