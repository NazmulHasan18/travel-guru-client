// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import CarouselImage from "../CarouselImage/CarouselImage";
import DestDetails from "../DestDetails/DestDetails";

const Home = () => {
   const destinations = useLoaderData();
   const [destination, setDestination] = useState({});
   const handelId = (id) => {
      const activeDest = destinations.find((dest) => dest.id === id);
      console.log(activeDest);
      setDestination(activeDest);
   };
   return (
      <div className="text-white mt-5 pt-5">
         <Row className="gap-5 align-items-center">
            <Col>
               <DestDetails destination={destination}></DestDetails>
            </Col>
            <Col xs={8}>
               <CarouselImage destinations={destinations} handelId={handelId}></CarouselImage>
            </Col>
         </Row>
      </div>
   );
};

export default Home;
