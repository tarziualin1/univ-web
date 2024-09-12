import React from "react";
import "./Blog.css";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Blog1Img from "../../utils/images/blog1-img.jpg";
import Blog2Img from "../../utils/images/blog2-img.jpg";
import Blog3Img from "../../utils/images/blog3-img.jpg";
import Blog4Img from "../../utils/images/blog4-img.jpg";
import Blog5Img from "../../utils/images/blog5-img.jpg";
import Blog6Img from "../../utils/images/blog6-img.jpg";
import Blog7Img from "../../utils/images/sport-course.jpg";
import Blog8Img from "../../utils/images/blog8-img.jpg";
import Blog9Img from "../../utils/images/blog9-img.jpg";

const blogs = [
  {
    id: 1,
    img: [Blog1Img],
    title: "Navigating Your First Year: Tips for New Students",
    description:
      "Dive into essential advice and strategies to help new students navigate their first year at Global University successfully. From study tips to campus resources, this blog provides valuable insights for a smooth transition into university life.",
  },
  {
    id: 2,
    img: [Blog2Img],
    title: "The Impact of Globalization on Higher Education",
    description:
      "Explore how globalization influences higher education at Global University and beyond. This blog examines trends, challenges, and opportunities in international education, highlighting our university's global perspective.",
  },
  {
    id: 3,
    img: [Blog3Img],
    title: "Career Paths with a Degree from Global University",
    description:
      "Discover the diverse career opportunities available to graduates of Global University across various fields. This blog showcases alumni success stories, industry insights, and career development tips to inspire future professionals.",
  },
  {
    id: 4,
    img: [Blog9Img],
    title: "Innovations in Research: Spotlight on Global University Scholars",
    description:
      "Highlighting groundbreaking research initiatives and achievements by faculty and students at Global University. This blog features innovative projects, collaborations, and their impact on advancing knowledge and solving global challenges.",
  },
  {
    id: 5,
    img: [Blog5Img],
    title: "Student Spotlight: Life at Global University",
    description:
      "Hear firsthand accounts from current students about their experiences at Global University. This blog features stories, achievements, and perspectives from diverse student voices, showcasing campus life and community engagement.",
  },
  {
    id: 6,
    img: [Blog6Img],
    title:
      "Exploring Cultural Diversity: Global University's International Community",
    description:
      "Celebrate the rich cultural diversity at Global University through events, traditions, and experiences shared by our international student community. This blog promotes cross-cultural understanding and global perspectives on campus.",
  },
  {
    id: 7,
    img: [Blog7Img],
    title: "Staying Healthy and Balanced: Wellness Tips for Students",
    description:
      "Prioritize student well-being with practical tips and resources for maintaining a healthy lifestyle while studying at Global University. This blog covers fitness, nutrition, mental health, and self-care strategies for academic success.",
  },
  {
    id: 8,
    img: [Blog8Img],
    title: "Behind the Scenes: Faculty Insights at Global University",
    description:
      "Gain insights into the expertise and research interests of Global University's faculty members. This blog profiles professors, their academic pursuits, teaching philosophies, and contributions to their respective fields.",
  },
  {
    id: 9,
    img: [Blog4Img],
    title: "Preparing for Graduation: Next Steps After Global University",
    description:
      "Guide graduating students through the transition from university to the professional world. This blog offers career advice, job search tips, networking strategies, and alumni success stories to empower graduates as they embark on their next chapter.",
  },
];

function Blog() {
  return (
    <div className="blog-page">
      <header className="height-75">
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
          <h1 className="text-center fw-semibold color-root-green">
            Welcome to Our Blog Page
          </h1>
          <p className="text-center w-75 mb-5 mt-4">
            Explore a wealth of knowledge and insights on Global University's
            official blog page. Here, you'll find a diverse collection of
            articles that delve into various aspects of university life,
            academic excellence, research breakthroughs, student achievements,
            and more. Whether you're a prospective student, current student,
            alumni, or simply curious about higher education trends, our blogs
            offer valuable information, tips, and stories. Stay connected with
            us to discover compelling narratives, expert perspectives, and
            updates that showcase our commitment to fostering a vibrant learning
            community and preparing future leaders.
          </p>
        </div>
      </header>

      <div className="bg-body-tertiary py-5">
        <div className="container">
          <div className="row g-4">
            {blogs.map((blog) => (
              <div key={blog.id} className="col-md-6 col-lg-4">
                <Link to="/blog" className="text-decoration-none">
                  <Card className="h-100 shadow scale-hover-effect bg-dark text-light border-0">
                    <Card.Img variant="top" src={blog.img} />
                    <Card.Body className="p-md-5 d-flex flex-column align-items-center justify-content-between">
                      <Card.Title className="fs-2 mb-4 color-root-green">
                        {blog.title}
                      </Card.Title>
                      <Card.Text className="text-center">
                        {blog.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
