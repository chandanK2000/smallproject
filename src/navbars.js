import React from "react";
import { Link } from "react-router-dom";
const Navbars = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="Calculators">
                Calculators
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="snapshots">
              Snapshots
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="emojisearch">
              Emojisearch
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="cruds">
              Cruds
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="tablesearch">
              Tablesearch
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="myform">
              Myform
              </Link>
            </li>
            {/* <form class="d-flex me-auto">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbars;
