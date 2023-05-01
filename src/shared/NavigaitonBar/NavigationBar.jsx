// eslint-disable-next-line no-unused-vars
import React from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

const NavigationBar = () => {
   return (
      <Navbar bg="transparent" className="pt-5" variant="dark" expand="lg ">
         <Container fluid className="text-white gap-5 px-0">
            <Navbar.Brand href="#">
               <img src="/logo.png" alt="" />
            </Navbar.Brand>
            <Form className="d-flex flex-grow-1 position-relative">
               <Form.Control
                  type="Search"
                  placeholder="Search your Destination..."
                  className="me-2 bg-opacity-25 text-white bg-white ps-4 search-from"
                  aria-label="Search"
               />
               <FaSearch className="position-absolute top-50 start-0 translate-middle-y ps-2 fs-4"></FaSearch>
            </Form>
            <Navbar.Toggle aria-controls="navbarScroll" className="text-white" />
            <Navbar.Collapse id="navbarScroll">
               <Nav
                  className=" ms-2 my-lg-0 gap-5 align-items-center justify-content-center "
                  style={{ maxHeight: "100px" }}
                  navbarScroll
               >
                  <Nav.Link href="#">News</Nav.Link>
                  <Nav.Link href="#">Destination</Nav.Link>
                  <Nav.Link href="#">Blogs</Nav.Link>
                  <Nav.Link href="#">Contact</Nav.Link>
                  <Nav.Link href="#">
                     <Button variant="warning">Login</Button>
                  </Nav.Link>
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
};

export default NavigationBar;
