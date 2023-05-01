/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Button, Form } from "react-bootstrap";

const Booking = ({ destination }) => {
   return (
      <div
         className="bg-white text-black p-4 mx-auto rounded-2 text-secondary-emphasis"
         style={{ height: "470px", width: "430px" }}
      >
         <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Origin</Form.Label>
               <Form.Control
                  className="border-0 bg-secondary-subtle fw-bold p-3"
                  type="text"
                  placeholder="Origin"
                  style={{ backgroundColor: "#F2F2F2" }}
               />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Destination</Form.Label>
               <Form.Control
                  className="border-0 bg-secondary-subtle fw-bold p-3"
                  type="text"
                  placeholder="Origin"
                  style={{ backgroundColor: "#F2F2F2" }}
                  value={destination.name}
                  readOnly
               />
            </Form.Group>
            <Form.Group className="d-flex gap-3">
               <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>From</Form.Label>
                  <Form.Control
                     className="border-0 bg-secondary-subtle fw-bold p-3"
                     type="text"
                     placeholder="Starting Date"
                     style={{ backgroundColor: "#F2F2F2" }}
                  />
               </Form.Group>
               <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>To</Form.Label>
                  <Form.Control
                     className="border-0 bg-secondary-subtle fw-bold p-3"
                     type="text"
                     placeholder="Ending Date"
                     style={{ backgroundColor: "#F2F2F2" }}
                  />
               </Form.Group>
            </Form.Group>
            <Button variant="warning px-4 py-3 my-4 fw-semibold" className="w-100">
               Start Booking
            </Button>
         </Form>
      </div>
   );
};

export default Booking;
