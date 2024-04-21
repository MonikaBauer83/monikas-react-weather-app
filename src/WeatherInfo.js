import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo row">
      <h1>{props.data.city}</h1>
      <div className="col-9">
        <ul>
          <li>
            <FormattedDate date={props.data.date} />{" "}
          </li>
          <li className="text-capitalize">{props.data.description}</li>
          <li>Humidity: {props.data.humidity} %</li>
          <li>Wind: {props.data.wind} km/h</li>
        </ul>
      </div>

      <div className="WeatherInfo-today col-3">
        <div className="WeatherInfo-icon">
          <WeatherIcon code={props.data.icon} size={45} />
        </div>
        <span className="temperature">
          {Math.round(props.data.temperature)}
        </span>
        <span className="unit">°C</span>
      </div>
    </div>
  );
}
