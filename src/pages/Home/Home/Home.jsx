// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import CarouselImage from "../CarouselImage/CarouselImage";
import DestDetails from "../DestDetails/DestDetails";
import Booking from "../Booking/Booking";

const Home = () => {
   const destinations = useLoaderData();
   const [destination, setDestination] = useState({});
   const handelId = (id) => {
      const activeDest = destinations.find((dest) => dest.id === id);
      //   console.log(activeDest);
      setDestination(activeDest);
   };
   const [toggle, setToggle] = useState(true);
   const handelToggle = () => {
      setToggle(!toggle);
   };
   return (
      <div className="text-white mt-5 pt-5">
         <Row className="gap-5">
            <Col>
               <DestDetails handelToggle={handelToggle} destination={destination}></DestDetails>
            </Col>
            <Col xs={7}>
               {toggle ? (
                  <CarouselImage destinations={destinations} handelId={handelId}></CarouselImage>
               ) : (
                  <Booking destination={destination}></Booking>
               )}
            </Col>
         </Row>
      </div>
   );
};

export default Home;
