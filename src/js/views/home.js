import React, { useState, useEffect, useContext } from "react";

import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <h1>Characters</h1>
      <div className="d-flex justify-content-evenly">
        {store.people.map((person) => {
          return (
            <div>
              <img
                src={`https://starwars-visualguide.com/assets/img/characters/${person.uid}.jpg`}
              ></img>
              <p>ID: {person.uid}</p>
              <p>Name: {person.name}</p>
              <p>
                <Link to={`/person/${person.uid}`}>Learn More</Link>
              </p>
            </div>
          );
        })}
      </div>

      <h1>Vehicles</h1>
      <div className="d-flex justify-content-evenly">
        {store.vehicles.map((vehicle) => {
          return (
            <div>
              <img
                src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`}
              ></img>
              <p>ID: {vehicle.uid}</p>
              <p>Name: {vehicle.name}</p>
              <p>
                <Link to={`/vehicle/${vehicle.uid}`}>Learn More</Link>
              </p>
            </div>
          );
        })}
      </div>

      <h1>Planets</h1>
      <div className="d-flex justify-content-evenly">
        {store.planets.map((planet) => {
          return (
            <div>
              <img
                src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}
              ></img>
              <p>ID: {planet.uid}</p>
              <p>Name: {planet.name}</p>
              <p>
                <Link to={`/planet/${planet.uid}`}>Learn More</Link>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
