/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Button } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";

const DestDetails = ({ destination, handelToggle }) => {
   return (
      <div>
         <h1 style={{ fontSize: "90px" }}>{destination.name}</h1>
         <p>{destination.description}</p>
         <Button variant="warning px-4" onClick={handelToggle}>
            Book Now <FaArrowRight></FaArrowRight>
         </Button>
      </div>
   );
};

export default DestDetails;
