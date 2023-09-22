import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">Starwars Blog</span>
        </Link>
        <div className="ml-auto">
          <div className="dropdown">
            <button
              className="btn btn-warning dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              Favorites
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              {store.favorites.map((fav) => {
                return (
                  <li>
                    <Link
                      to={`/${fav.type}/${fav.uid}`}
                      className="dropdown-item d-flex justify-content-between"
                    >
                      <span>{fav.value.name}</span>
                      <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          actions.removeFromFavorites(fav.type, fav.uid);
                        }}
                      >
                        <FontAwesomeIcon icon={faTrashCan} />
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
