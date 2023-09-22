import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart as faHeartSolid,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartOutline } from "@fortawesome/free-regular-svg-icons";

import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="mx-5">
      <h1>Characters</h1>

      {/* <div className="d-flex justify-content-evenly"> */}

      <div className="d-flex row my-3">
        {store.people.items.map((person) => {
          return (
            <div key={person.uid} className="" style={{ width: "20%" }}>
              <div className="d-flex justify-content-center">
                <img
                  src={`https://starwars-visualguide.com/assets/img/characters/${person.uid}.jpg`}
                  style={{ width: "280px" }}
                ></img>
              </div>
              <div className="d-flex justify-content-center my-3">
                <h4>{person.name}</h4>
              </div>
              <div className="d-flex justify-content-evenly mb-3">
                <Link className="btn btn-primary" to={`/person/${person.uid}`}>
                  <FontAwesomeIcon icon={faCircleInfo} />
                </Link>
                <a
                  className="btn btn-warning"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    actions.toggleFavorite("person", person.uid, person);
                  }}
                >
                  {store.favorites.some(
                    (fav) => fav.uid == person.uid && fav.type == "person"
                  ) ? (
                    <FontAwesomeIcon icon={faHeartSolid} />
                  ) : (
                    <FontAwesomeIcon icon={faHeartOutline} />
                  )}
                </a>
              </div>
            </div>
          );
        })}
        <div className="d-flex justify-content-center">
          <button
            onClick={(e) => {
              e.preventDefault();
              actions.loadNextPeople();
            }}
            type="button"
            className="btn btn-light"
          >
            Load more...
          </button>
        </div>
      </div>

      <h1>Vehicles</h1>
      <div className="d-flex row my-3">
        {store.vehicles.items.map((vehicle) => {
          return (
            <div key={vehicle.uid} className="" style={{ width: "20%" }}>
              <div className="d-flex justify-content-center">
                <img
                  src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`}
                  style={{ width: "280px" }}
                ></img>
              </div>
              <div className="d-flex justify-content-center my-3">
                <h4>{vehicle.name}</h4>
              </div>
              <div className="d-flex justify-content-evenly">
                <p>
                  <Link
                    className="btn btn-primary"
                    to={`/vehicle/${vehicle.uid}`}
                  >
                    <FontAwesomeIcon icon={faCircleInfo} />
                  </Link>
                </p>
                <p>
                  <a
                    href="#"
                    className="btn btn-warning"
                    onClick={(e) => {
                      e.preventDefault();
                      actions.toggleFavorite("vehicle", vehicle.uid, vehicle);
                    }}
                  >
                    {store.favorites.some(
                      (fav) => fav.uid == vehicle.uid && fav.type == "vehicle"
                    ) ? (
                      <FontAwesomeIcon icon={faHeartSolid} />
                    ) : (
                      <FontAwesomeIcon icon={faHeartOutline} />
                    )}
                  </a>
                </p>
              </div>
            </div>
          );
        })}
        <div className="d-flex justify-content-center">
          <button
            onClick={(e) => {
              e.preventDefault();
              actions.loadNextVehicles();
            }}
            type="button"
            className="btn btn-light"
          >
            Load more...
          </button>
        </div>
      </div>

      <h1>Planets</h1>
      <div className="d-flex row my-3">
        {store.planets.items.map((planet) => {
          return (
            <div key={planet.uid} className="" style={{ width: "20%" }}>
              <div className="d-flex justify-content-center">
                <img
                  src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}
                  style={{ width: "280px" }}
                ></img>
              </div>
              <div className="d-flex justify-content-center my-3">
                <h4>{planet.name}</h4>
              </div>
              <div className="d-flex justify-content-evenly">
                <p>
                  <Link
                    className="btn btn-primary"
                    to={`/planet/${planet.uid}`}
                  >
                    <FontAwesomeIcon icon={faCircleInfo} />
                  </Link>
                </p>
                <p>
                  <a
                    href="#"
                    className="btn btn-warning"
                    onClick={(e) => {
                      e.preventDefault();
                      actions.toggleFavorite("planet", planet.uid, planet);
                    }}
                  >
                    {store.favorites.some(
                      (fav) => fav.uid == planet.uid && fav.type == "planet"
                    ) ? (
                      <FontAwesomeIcon icon={faHeartSolid} />
                    ) : (
                      <FontAwesomeIcon icon={faHeartOutline} />
                    )}
                  </a>
                </p>
              </div>
            </div>
          );
        })}
        <div className="d-flex justify-content-center">
          <button
            onClick={(e) => {
              e.preventDefault();
              actions.loadNextPlanets();
            }}
            type="button"
            className="btn btn-light"
          >
            Load more...
          </button>
        </div>
      </div>
    </div>
  );
};
