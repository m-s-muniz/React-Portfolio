// import React from 'react'

// const aboutme = () => {
//   return (
//     <div>aboutme</div>
//   )
// }

// export default aboutme

import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import headShot from "../../assets/images/myphoto2.jpg"



export default function about() {
  return (
    <Container>
      <h2 className="title">About Me</h2>
      <Row>
        <Col md={5} lg={4} >
          <img src={headShot} alt="headshot" className="profile" ></img>
        </Col>
        <Col md={7} lg={8} className="profile-div">
          <div className="description">
            <p>
            Hello, I'm Michael, a dedicated and enthusiastic web developer currently in my fifth month of an immersive six-month bootcamp program. Throughout this comprehensive program, I've been actively acquiring the skills and knowledge needed to become a proficient junior full-stack web developer. With a focus on both front-end and back-end development, I've gained expertise in building dynamic web applications.

On the front-end, I've mastered the art of crafting visually appealing and user-friendly interfaces using modern technologies like React. I'm proficient in HTML, CSS, and JavaScript, enabling me to create responsive and intuitive user experiences. I've also worked with libraries like Bootstrap and Material UI to streamline development and ensure high-quality designs.

When it comes to the back end, I've gained experience in server-side programming, handling databases, and working with APIs. I've built RESTful APIs and implemented authentication systems to ensure secure user interactions. Utilizing tools such as Node.js, I've worked with databases like MongoDB and SQL to store and retrieve data effectively.

Throughout my journey, I've embraced a growth mindset, constantly seeking new challenges and opportunities for learning. I possess strong problem-solving skills, effective communication abilities, and a passion for writing clean and efficient code. I enjoy collaborating with others and look forward to joining a team of talented professionals.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}