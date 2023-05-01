/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const DestDetails = ({ destination, handelToggle }) => {
   const [booking, setBooking] = useState(false);

   return (
      <div>
         <h1 style={{ fontSize: "90px" }}>{destination.name}</h1>
         <p>{destination.description}</p>
         <Button
            variant="warning px-4"
            className="fw-semibold"
            onClick={() => {
               handelToggle();
               setBooking(!booking);
            }}
         >
            {booking ? (
               <>
                  <FaArrowLeft></FaArrowLeft> Select Destination
               </>
            ) : (
               <>
                  Book Now <FaArrowRight></FaArrowRight>
               </>
            )}
         </Button>
      </div>
   );
};

export default DestDetails;
