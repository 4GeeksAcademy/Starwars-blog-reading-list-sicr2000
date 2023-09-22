import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planet = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  const planet = actions.loadPlanet(params.uid);
  return (
    <div className="jumbotron mt-5 pt-5">
      <div className="d-flex justify-content-center">
        <img
          src={`https://starwars-visualguide.com/assets/img/planets/${params.uid}.jpg`}
        ></img>
      </div>
      <br />
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h3 className="display-5">{planet.name}</h3>
        <h5>Size: {planet.diameter} km diameter</h5>
        <h5>Population: {planet.population}</h5>
        <h5>Rotation period: {planet.rotation_period} days</h5>
        <h5>Orbital period: {planet.orbital_period} days</h5>
        <h5>Diameter: {planet.diameter}km</h5>
        <h5>Gravity: {planet.gravity}</h5>
        <h5>Terrain: {planet.terrain}</h5>
        <h5>Surface Water: {planet.surface_water}%</h5>
        <h5>Climate: {planet.climate}</h5>

        <hr className="my-4" />

        <Link to="/">
          <span className="btn btn-primary btn-lg" href="#" role="button">
            Back home
          </span>
        </Link>
      </div>
    </div>
  );
};

Planet.propTypes = {
  match: PropTypes.object,
};
