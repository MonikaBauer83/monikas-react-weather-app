import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <div className="WeatherInfo-details row">
        <div className="WeatherInfo-description col-6">
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
            <li>
              Humidity:{" "}
              <span className="special-color">{props.data.humidity} %</span>
            </li>
            <li>
              Wind:{" "}
              <span className="special-color">{props.data.wind} km/h</span>
            </li>
          </ul>
        </div>

        <div className="WeatherInfo-today col-6">
          <div className="WeatherInfo-icon">
            <WeatherIcon code={props.data.icon} size={80} />
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
