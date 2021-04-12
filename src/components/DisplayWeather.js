import React from 'react';
import "./displayweather.css";

function DisplayWeather(props){
    console.log("props",props)
    const {data} = props;
    console.log(data)

const iconurl ="http://openweathermap.org/img/wn/" + `${data.weather[0].icon}` + ".png";

    return <div className ="displayweather">
        <div className="maincard">
            <span className="cardtitle">
                {data.name},{data.sys.country} . Weather
            </span>
            <span className="cardsubtitle">
                As of {new Date().toLocaleTimeString()}
            </span>
            <h1>
                {Math.floor((data.main.temp - 273.15)* 9/5) + 32}
                <sup>o</sup>
            </h1>
            <span className="weather-main">
                {data.weather[0].main}
            </span>

            <img src={iconurl} className="weather-icon" alt=""/>
        </div>

    </div>

}

export default DisplayWeather