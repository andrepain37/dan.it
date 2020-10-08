import React from "react";
import { Link } from "react-router-dom";


const NotFound = (props) => {

    return (
        <>

            <h1>not found 404</h1>
            <Link to="/">Go to home</Link>
        </>
    );
};

export default NotFound;
