import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Person = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  const person = actions.loadPerson(params.uid);
  return (
      <div className="jumbotron mt-5 pt-5">
        <div className="d-flex justify-content-center">
          <img
            className="rounded"
            src={`https://starwars-visualguide.com/assets/img/characters/${params.uid}.jpg`}
          ></img>
        </div>
        <br />
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h3 className="display-5">{person.name}</h3>
          <h5>Birth Year: {person.birth_year}</h5>
          <h5>Height: {person.height} cm</h5>
          <h5>Mass: {person.mass} kg</h5>
          <h5>Gender: {person.gender}</h5>
          <h5>Hair Color: {person.hair_color}</h5>
          <h5>Skin Color: {person.skin_color}</h5>

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

Person.propTypes = {
  match: PropTypes.object,
};
