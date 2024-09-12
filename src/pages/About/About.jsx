import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import AboutUsSectionImg from "../../utils/images/about-us-section-img.jpg";
import ChooseSection from "../../components/ChooseSection/ChooseSection";
import Person1 from "../../utils/images/person1.jpg";
import Person2 from "../../utils/images/person2.jpg";
import Person3 from "../../utils/images/person3.jpg";
import Person4 from "../../utils/images/person4.jpg";
import Person5 from "../../utils/images/person5.jpg";
import Person6 from "../../utils/images/person6.jpg";
import Person7 from "../../utils/images/person7.jpg";
import Person8 from "../../utils/images/person8.jpg";
import Person9 from "../../utils/images/person9.jpg";

const persons = [
  {
    id: 1,
    img: [Person1],
  },
  {
    id: 2,
    img: [Person2],
  },
  {
    id: 3,
    img: [Person3],
  },
  {
    id: 4,
    img: [Person4],
  },
  {
    id: 5,
    img: [Person5],
  },
  {
    id: 6,
    img: [Person6],
  },
  {
    id: 7,
    img: [Person7],
  },
  {
    id: 8,
    img: [Person8],
  },
  {
    id: 9,
    img: [Person9],
  },
];

function About() {
  return (
    <div className="about-page">
      <header className="height-75">
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
          <h1 className="text-center fw-semibold color-root-green">About Us</h1>
          <p className="text-center w-75 mb-5">
            Learn about Global University's rich history, commitment to academic
            excellence, and global impact on our About Us page. Discover our
            mission to nurture future leaders through innovative education,
            research, and community engagement. Explore our values, faculty
            expertise, and the vibrant campus culture that defines the Global
            University experience. Join us in shaping a brighter future through
            education and empowerment at Global University.
          </p>
        </div>
      </header>

      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center mb-4 mb-lg-0">
            <h2 className="mb-4 mb-lg-5">Study with us</h2>
            <p>
              At Global University, our commitment to academic excellence is
              rooted in a rich history of innovation and a steadfast dedication
              to nurturing future leaders. Our programs are designed to
              challenge and inspire, preparing students to excel in their chosen
              fields and make a meaningful impact on a global scale. As you
              explore our diverse range of programs, you'll discover a
              curriculum shaped by cutting-edge research and industry insights,
              taught by renowned faculty who are leaders in their fields. Our
              supportive learning environment and state-of-the-art facilities
              provide the ideal setting for intellectual exploration and
              hands-on learning.
            </p>
            <p className="mb-4 mb-lg-5">
              Beyond academics, Global University fosters a vibrant campus
              culture where diversity is celebrated, and students are encouraged
              to engage in community service, extracurricular activities, and
              leadership opportunities. Our values of integrity, inclusivity,
              and excellence guide everything we do, ensuring that every student
              receives a well-rounded education that prepares them not only for
              their careers but also for lifelong success and fulfillment. Join
              us at Global University to become part of a community dedicated to
              shaping a brighter future through education, research, and
              empowerment. Whether you're beginning your undergraduate journey
              or advancing your career through graduate studies, we invite you
              to seize the opportunities that await you and make a lasting
              impact in your chosen field and beyond.
            </p>
            <Link to="/contact">
              <button
                type="button"
                className="btn btn-success btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
              >
                Contact Us
              </button>
            </Link>
          </div>
          <div className="col-lg-6 d-flex justify-content-center">
            <img src={AboutUsSectionImg} className="img-fluid w-75" alt="" />
          </div>
        </div>
      </div>

      <div className="bg-dark text-light py-5">
        <ChooseSection />
      </div>

      <div className="bg-body-tertiary py-5">
        <div className="container">
          <h2 className="text-center mb-5">Our Winners</h2>
          <div className="row g-4">
            {persons.map((person) => (
              <div key={person.id} className="col-md-4">
                <img src={person.img} className="img-fluid" alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
