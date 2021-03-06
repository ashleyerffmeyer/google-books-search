import React from "react";
import "./Jumbotron.css";

// Creates Nav component for heading and links to pages
function Jumbotron() {
    return (
        <div className="jumbotron text-center">
            <h1 className="title">(React) Google Books Search</h1>
            <p className="lead">Search for and save books that interest you!</p>
        </div>
    );
}

// Export Jumbotron component
export default Jumbotron;