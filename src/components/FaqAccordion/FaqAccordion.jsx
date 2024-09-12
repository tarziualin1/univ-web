import React from "react";
import "./FaqAccordion.css";
import Accordion from "react-bootstrap/Accordion";

function FaqAccordion() {
  return (
    <div className="faq-section">
      <div className="container d-flex flex-column align-items-center">
        <h2 className="text-center text-capitalize mb-5">
          Frequently asked questions
        </h2>
        <p className="text-center mb-5">
          Frequently Asked Questions (FAQ) provides a comprehensive resource
          addressing common inquiries about Global University's programs,
          admissions, campus life, and more. Whether you're a prospective
          student, parent, or visitor, this section aims to clarify doubts and
          provide essential information, ensuring clarity and confidence in
          navigating our university experience.
        </p>
        <Accordion defaultActiveKey="" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              What are the admission requirements for Global University?
            </Accordion.Header>
            <Accordion.Body>
              Admission requirements vary by program, but typically include
              submission of academic transcripts, standardized test scores (if
              applicable), letters of recommendation, and a personal statement.
              Visit our Admissions page for specific details tailored to each
              program.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              What programs does Global University offer?
            </Accordion.Header>
            <Accordion.Body>
              Global University offers a diverse range of programs across fields
              such as Business, Engineering, Arts & Sciences, Law, Medicine, and
              more. Explore our full list of programs on our website to find the
              one that best fits your academic and career aspirations.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              What support services does Global University provide for students?
            </Accordion.Header>
            <Accordion.Body>
              At Global University, we are committed to supporting student
              success. Our services include academic advising, career
              counseling, tutoring, health and wellness programs, student clubs
              and organizations, and comprehensive campus facilities. We strive
              to create an environment where every student can thrive.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              Can I tour the Global University campus?
            </Accordion.Header>
            <Accordion.Body>
              Prospective students and their families are welcome to schedule a
              guided campus tour to explore our state-of-the-art facilities,
              residence halls, and academic buildings. Virtual tour options are
              also available for those unable to visit in person. Visit our
              Admissions page to schedule your tour and experience Global
              University firsthand.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}

export default FaqAccordion;
