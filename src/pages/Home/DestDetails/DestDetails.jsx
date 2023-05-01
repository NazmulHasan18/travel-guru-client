/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Button } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";

const DestDetails = ({ destination }) => {
   return (
      <div>
         <h1>{destination.name}</h1>
         <p>{destination.description}</p>
         <Button variant="warning px-4">
            Book Now <FaArrowRight></FaArrowRight>
         </Button>
      </div>
   );
};

export default DestDetails;
