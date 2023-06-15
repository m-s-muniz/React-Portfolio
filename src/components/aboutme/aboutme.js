// import React from 'react'

// const aboutme = () => {
//   return (
//     <div>aboutme</div>
//   )
// }

// export default aboutme

import React from 'react';
import headShot from "../../assets/images/myphoto2.jpg"
const imgStyle = {
    padding: '20px',
    height:'400px',
    width:'300px'
}

const linkStyle = {
    color: 'red'
}

function aboutme() {
    return(
        <div class="jumbotron">
  <h1 class="display-4">About Me</h1>
  <img class="headshot" src={headShot} height={400} width={300} alt="headshot" style={imgStyle}></img>
  <p class="lead">Junior Web Developer</p>
  <hr class="my-4"></hr>
  <p></p>
  <p class="lead">
  <button type="button" class="btn btn-dark"><a href="./assets/images/myresume.pdf" style={linkStyle}>View Full Resume</a></button>
  </p>
</div>
    )
}

export default aboutme;