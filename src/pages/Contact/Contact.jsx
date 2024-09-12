import React from "react";
import "./Contact.css";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import MadridLocationImg from "../../utils/images/Madrid-location.jpg";
import BerlinLocationImg from "../../utils/images/Berlin-location.jpg";
import LondonLocationImg from "../../utils/images/London-location.jpg";

function Contact() {
  return (
    <div className="contact-page">
      <header className="height-75">
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
          <h1 className="text-center fw-semibold color-root-green">
            Get In Touch
          </h1>
          <p className="text-center w-75 mb-5">
            Reach out to Global University easily through our Contact Form. Find
            our contact details for inquiries about admissions, programs,
            partnerships, or general information. Our team is here to assist you
            promptly and provide the information you need. We look forward to
            hearing from you!
          </p>
        </div>
      </header>

      <div className="container my-5 d-flex justify-content-center">
        <Form
          id="contact-form"
          action=""
          method="POST"
          encType="multipart/form-data"
        >
          <Row className="mb-3">
            <Col sm={12} md={6} className="mb-3 mb-md-0">
              <Form.Label>First Name</Form.Label>
              <Form.Control placeholder="First name" />
            </Col>
            <Col sm={12} md={6}>
              <Form.Label>Last Name</Form.Label>
              <Form.Control placeholder="Last name" />
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="Your address" />
          </Form.Group>

          <Row className="mb-3">
            <Col sm={12} md={6} className="mb-3 mb-md-0">
              <Form.Label>Location</Form.Label>
              <Form.Select defaultValue="Madrid">
                <option>Madrid</option>
                <option>Berlin</option>
                <option>London</option>
              </Form.Select>
            </Col>
            <Col sm={12} md={6}>
              <Form.Label>Postcode</Form.Label>
              <Form.Control placeholder="Postcode" />
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Your Message</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          <Button variant="success btn-lg" type="submit">
            Submit
          </Button>
        </Form>
      </div>

      <div className="bg-dark text-light p-5">
        <div className="container">
          <h2 className="text-center mb-5 color-root-green">Our Locations</h2>
          <div className="row g-4">
            <div className="col-lg-4 d-flex flex-column align-items-center">
              <img src={MadridLocationImg} className="img-fluid" alt="" />
              <h3 className="text-center mt-3">Madrid</h3>
            </div>
            <div className="col-lg-4 d-flex flex-column align-items-center">
              <img src={BerlinLocationImg} className="img-fluid" alt="" />
              <h3 className="text-center mt-3">Berlin</h3>
            </div>
            <div className="col-lg-4 d-flex flex-column align-items-center">
              <img src={LondonLocationImg} className="img-fluid" alt="" />
              <h3 className="text-center mt-3">London</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
