// import React from 'react'

// const aboutme = () => {
//   return (
//     <div>aboutme</div>
//   )
// }

// export default aboutme

import React from 'react';
import headShot from "../../assets/images/myphoto2.jpg"
import resume from "../../assets/myresume.pdf"
const imgStyle = {
    padding: '30px',
    height:'400px',
    width:'300px'
}

const linkStyle = {
    color: 'red'
}

function aboutme() {
  return (
    <div class="jumbotron">
      <h1 class="display-4">About Me</h1>
      <img
        class="headshot"
        src={headShot}
        alt="headshot"
        style={imgStyle}
      ></img>
      <p class="lead">Junior Web Developer</p>
      <hr class="my-4"></hr>
      <p></p>
      <p class="lead">
        <button type="button" class="btn btn-dark">
          <a href={resume} style={linkStyle}>
            View Full Resume
          </a>
        </button>
      </p>
    </div>
  );
}

export default aboutme;