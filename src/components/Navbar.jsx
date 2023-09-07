import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from '@fortawesome/free-brands-svg-icons';


import "./Navbar.css";

export default function Navbar() {
  return (
    <header>
      <Link to="/" className="logo">
        Quizzer
      </Link>
      <nav>
        <Link to="/">
          <FontAwesomeIcon icon={faHouse} />
        </Link>
        <Link
          to="https://github.com/shubhankarval/Quizzer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </Link>
      </nav>
    </header>
  );
}
