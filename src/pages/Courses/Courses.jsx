import React from "react";
import "./Courses.css";
import { Card } from "react-bootstrap";
import ArtCourseImg from "../../utils/images/art-course.jpg";
import BusinessCourseImg from "../../utils/images/business-course.jpg";
import ComputerScienceCourseImg from "../../utils/images/computer-science-course.jpg";
import EducationCourseImg from "../../utils/images/education-course.jpg";
import HealthcareCourseImg from "../../utils/images/healthcare-course.jpg";
import LawCourseImg from "../../utils/images/law-course.jpg";
import MusicCourseImg from "../../utils/images/music-course.jpg";
import SportCourseImg from "../../utils/images/sport-course.jpg";
import FaqAccordion from "../../components/FaqAccordion/FaqAccordion";

const courses = [
  {
    id: 1,
    img: [ArtCourseImg],
    title: "Art Course",
    description:
      "Explore creativity and artistic expression through diverse mediums and art history, preparing for a career in visual arts or design.",
  },
  {
    id: 2,
    img: [BusinessCourseImg],
    title: "Business Course",
    description:
      "Gain essential skills in management, finance, marketing, and entrepreneurship for a successful career in business or as an entrepreneur.",
  },
  {
    id: 3,
    img: [ComputerScienceCourseImg],
    title: "Computer Science Course",
    description:
      "Learn programming, software development, and AI to meet the growing demand for technology professionals in various industries.",
  },
  {
    id: 4,
    img: [EducationCourseImg],
    title: "Education Course",
    description:
      "Prepare to inspire and educate future generations with knowledge in educational theories, teaching methods, and classroom management.",
  },
  {
    id: 5,
    img: [HealthcareCourseImg],
    title: "Healthcare Course",
    description:
      "Study medical sciences, patient care, healthcare administration, and public health to pursue a rewarding career in healthcare.",
  },
  {
    id: 6,
    img: [LawCourseImg],
    title: "Law Course",
    description:
      "Explore constitutional law, criminal justice, and international law to prepare for a career as a lawyer, advocate, or legal consultant.",
  },
  {
    id: 7,
    img: [MusicCourseImg],
    title: "Music Course",
    description:
      "Develop musical talents in composition, performance, and music theory, preparing for a career in performance, composition, or music education.",
  },
  {
    id: 8,
    img: [SportCourseImg],
    title: "Sport Course",
    description:
      "Gain expertise in sport management, exercise science, and coaching techniques for a career in sports management, coaching, or sports administration.",
  },
];

function Courses() {
  return (
    <div className="courses-page">
      <header className="height-75">
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
          <h1 className="text-center color-root-green fw-semibold">
            Our Courses
          </h1>
          <p className="text-center w-75 mb-5">
            Discover a variety of academic programs at Global University
            designed to equip you with the skills and knowledge for your future
            career. From arts to business, computer science to healthcare, find
            the right path to achieve your academic and professional goals.
          </p>
        </div>
      </header>

      <div className="container py-5">
        <div className="row g-4">
          {courses.map((course) => (
            <div key={course.id} className="col-lg-6">
              <Card className="text-white shadow scale-hover-effect">
                <Card.Img src={course.img} />
                <Card.ImgOverlay className="d-flex flex-column align-items-center justify-content-center p-md-5">
                  <Card.Title className="fs-1 color-root-green mb-4">
                    {course.title}
                  </Card.Title>
                  <Card.Text className="text-center">
                    {course.description}
                  </Card.Text>
                </Card.ImgOverlay>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-dark text-light py-5">
        <FaqAccordion />
      </div>
    </div>
  );
}

export default Courses;
