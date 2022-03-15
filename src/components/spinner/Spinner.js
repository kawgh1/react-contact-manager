import React from "react";
import spinnerImage from "../../assets/img/loading-buffering.gif";

const Spinner = () => {
    return (
        <div>
            <img
                src={spinnerImage}
                alt="spinner"
                className="d-block m-auto"
                style={{ width: "100px" }}
            />
        </div>
    );
};

export default Spinner;
