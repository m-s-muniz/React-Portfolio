// import React from 'react'

// const portfolio = () => {
//   return (
//     <div>portfolio</div>
//   )
// }


import React from 'react'
import './portfolio.css'
import IMG1 from '../../../src/assets/images/Note-Taker.png'
import IMG2 from '../../../src/assets/images/foodie-fetch-screenshot.png'
import IMG3 from '../../../src/assets/images/CoordiNation-screenshot.png'
import IMG4 from '../../../src/assets/images/tech-blog.png'
import IMG5 from '../../../src/assets/images/weather-dashboard.png'
import IMG6 from '../../../src/assets/images/Jate.png'
import IMG7 from '../../../src/assets/images/IMA-GEN4.png'



const data = [
  {
    id: 7,
    image: IMG7,
    title:'IMA-GEN',
    github: 'https://github.com/stephen-castillo/IMA-GEN',
    demo: 'https://ima-gen-1220c390e173.herokuapp.com/'
  },
  {
    id: 2,
    image: IMG2,
    title:'Foodie-Fetch',
    github: 'https://github.com/stephen-castillo/Foodie-Fetch',
    demo: 'https://stephen-castillo.github.io/Foodie-Fetch/'
  },
  {
    id: 3,
    image: IMG3,
    title:'CoordiNation',
    github: 'https://github.com/Liz-Nino64/CoordiNation',
    demo: 'https://coordination-8.herokuapp.com/'
  },
  {
    id: 1,
    image: IMG1,
    title:'Note Taker: Express.js',
    github: 'https://github.com/m-s-muniz/Note-Taker-Express',
    demo: 'https://note-taker-app-michael.herokuapp.com/'
  },
  {
    id: 4,
    image: IMG4,
    title:'Tech Blog',
    github: 'https://github.com/m-s-muniz/Tech-Blog',
    demo: 'https://tech-blog25.herokuapp.com/'
  },
  {
    id: 5,
    image: IMG5,
    title:'Weather Board',
    github: 'https://github.com/m-s-muniz/weather-dashboard',
    demo: 'https://m-s-muniz.github.io/weather-dashboard/'
  },
  {
    id: 6,
    image: IMG6,
    title:'Just Another Text Editor',
    github: 'https://github.com/m-s-muniz/Text-Editor-PWA',
    demo: 'https://jate-pwa-msmuniz.herokuapp.com/'
  },
  ]
  

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5 className='portfolio'>My Projects</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio-container'>
      {
        data.map(({id, image, title, github, demo})=> {
          return (
            <article key={id} className='portfolio-project'>
            <div className='portfolio-project-image'>
              <img src={image} alt={title}/>
            </div>
            <h3>{title}</h3>
            <div className='portfolio-project-links'>
              <a href={github} className='btn' target='_blank' rel="noopener noreferrer">Github</a>
              <a href={demo} className='btn btn-primary' target='_blank'rel="noopener noreferrer">Demo</a>
            </div>
            </article>
          )
        })
      }
      </div>
    </section>
  )
}

export default portfolio