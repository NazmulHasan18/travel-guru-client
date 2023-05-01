import React from "react";
import Home from "../pages/Home/Home/Home";
import { Container } from "react-bootstrap";
import NavigationBar from "../shared/NavigaitonBar/NavigationBar";

const Main = () => {
   return (
      <div className="body-bg">
         <Container>
            <NavigationBar></NavigationBar>
            <Home></Home>
         </Container>
      </div>
   );
};

export default Main;
