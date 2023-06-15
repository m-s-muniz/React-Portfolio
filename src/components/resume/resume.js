import React from 'react'
import './resume.css'
import CV from '../../assets/myresume.pdf'
const resume = () => {
  return (
    <div>
      <h2 className='title'>Resume</h2>
      <div className='container resume-group'>
          <div className='proficiency-group'>
              <div className='front-proficiency'>
                  <h3>Front End</h3>
                  <ul>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JavaScript</li>
                      <li>React</li>
                      <li>Bootstrap</li>
                      <li>jQuery</li>
                      <li>React</li>
                      <li>Bootstrap</li>
                      <li>jQuery</li>
                      <li>Handlebars</li>
                      <li>RESTful APIs</li>
                      <li>JSON</li>
                  </ul>
              </div>
              <div className='back-proficiency'>
                <h3>Back End</h3>
                <ul>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>MySQL</li>
                  <li>Mongoose</li>
                  <li>Sequelize</li>
                  <li>Handlebars</li>
                  <li>JSON</li>
                  <li>APIs</li>
                  <li>GraphQL</li>
                </ul>
          </div>
          <a href={CV} target="_blank" rel="noopener noreferrer" className='btn download'>
          Download Resume</a>
    </div>
    </div>
    </div>
  )
}

export default resume
