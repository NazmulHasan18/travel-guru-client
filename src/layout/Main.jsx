// eslint-disable-next-line no-unused-vars
import React from "react";

import { Container } from "react-bootstrap";
import NavigationBar from "../shared/NavigaitonBar/NavigationBar";
import { Outlet } from "react-router-dom";

const Main = () => {
   return (
      <div className="body-bg">
         <Container>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
         </Container>
      </div>
   );
};

export default Main;
