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
            <p >Nashville, TN</p>

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