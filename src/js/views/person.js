import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Person = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  const person = actions.loadPerson(params.uid);
  return (
    <div className="jumbotron">
      <img
        src={`https://starwars-visualguide.com/assets/img/characters/${params.uid}.jpg`}
      ></img>
      <h1 className="display-4">This is Character: {params.uid}</h1>

      <h3 className="display-5">{person.name}</h3>
      <p>Height: {person.height} cm</p>
      <p>Weight: {person.mass} kg</p>

      <hr className="my-4" />

      <Link to="/">
        <span className="btn btn-primary btn-lg" href="#" role="button">
          Back home
        </span>
      </Link>
    </div>
  );
};

Person.propTypes = {
  match: PropTypes.object,
};
