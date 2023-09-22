import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Vehicle = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  const vehicle = actions.loadVehicle(params.uid);
  return (
    <div className="jumbotron mt-5 pt-5">
      <div className="d-flex justify-content-center">
        <img
          src={`https://starwars-visualguide.com/assets/img/vehicles/${params.uid}.jpg`}
        ></img>
      </div>
      <br />
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h3 className="display-5">{vehicle.name}</h3>
        <p>Model: {vehicle.model}</p>
        <p>Manufacturer: {vehicle.manufacturer}</p>
        <p>Class: {vehicle.vehicle_class}</p>
        <p>Cost: {vehicle.cost_in_credits} credits</p>
        <p>Top Speed: {vehicle.max_atmosphering_speed}km/h</p>
        <p>Cargo Capacity: {vehicle.cargo_capacity} tons</p>
        <p>Length: {vehicle.length}</p>
        <p>Minimum Crew: {vehicle.crew}</p>
        <p>Passengers: {vehicle.passengers}</p>

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

Vehicle.propTypes = {
  match: PropTypes.object,
};
