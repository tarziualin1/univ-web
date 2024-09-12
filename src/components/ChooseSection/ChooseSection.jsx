import React from "react";
import { Card } from "react-bootstrap";

function ChooseSection() {
  return (
    <div>
      <div className="container">
        <h2 className="text-center mb-5">Why choose Global University ?</h2>
        <div className="row g-4">
          <div className="col-lg-4">
            <Card className="d-flex align-items-center border-0 h-100">
              <div className="mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  fill="var(--primary-color)"
                  class="bi bi-award"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702z" />
                  <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z" />
                </svg>
              </div>
              <Card.Body>
                <Card.Title className="text-center text-capitalize mb-3">
                  Academic Excellence
                </Card.Title>
                <Card.Text className="text-center">
                  Global University offers top-tier education with rigorous
                  programs and innovative teaching by distinguished faculty,
                  ensuring students are well-prepared for their careers.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card className="d-flex align-items-center border-0 h-100">
              <div className="mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  fill="var(--primary-color)"
                  class="bi bi-globe"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z" />
                </svg>
              </div>
              <Card.Body>
                <Card.Title className="text-center text-capitalize mb-3">
                  Global Perspective
                </Card.Title>
                <Card.Text className="text-center">
                  Experience a truly international environment with a diverse
                  student body and faculty. Our curriculum and study abroad
                  programs prepare students for success in a connected world.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card className="d-flex align-items-center border-0 h-100">
              <div className="mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  fill="var(--primary-color)"
                  class="bi bi-graph-up-arrow"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M0 0h1v15h15v1H0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5"
                  />
                </svg>
              </div>
              <Card.Body>
                <Card.Title className="text-center text-capitalize mb-3">
                  Cutting-Edge Research Opportunities
                </Card.Title>
                <Card.Text className="text-center">
                  Engage in groundbreaking research with state-of-the-art
                  facilities and resources. Students collaborate with expert
                  faculty, gaining valuable hands-on experience for their future
                  careers.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseSection;
