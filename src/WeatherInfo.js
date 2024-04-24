import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <div className="WeatherInfo-details row">
        <div className="WeatherInfo-description col-7">
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
            <li>Humidity: {props.data.humidity} %</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>

        <div className="WeatherInfo-today col-5">
          <div className="WeatherInfo-icon">
            <WeatherIcon code={props.data.icon} size={55} />
          </div>
          <span className="WeatherInfo-temperature">
            {Math.round(props.data.temperature)}
          </span>
          <span className="weatherToday-unit">°C</span>
        </div>
      </div>
    </div>
  );
}
