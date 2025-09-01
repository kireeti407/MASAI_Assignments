import React from "react";
import { Link } from "react-router-dom";
export default function Nav() {
    return (
        <nav className="navbar">
            <h1>Star Wars Explorer</h1>
            <div className="navbar-links">
                <Link to="/">Films</Link>
                <Link to="/people">People</Link>
                <Link to="/planets">Planets</Link>
                <Link to="/species">Species</Link>
                <Link to="/starships">Starships</Link>
                <Link to="/vehicles">Vehicles</Link>
            </div>
        </nav>
    );
}