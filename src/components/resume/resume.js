import React from 'react'
import CV from '../../assets/myresume.pdf'
const resume = () => {
  return (
    <div>
      <h2 className='title'>Resume</h2>
      <div className='resume-group'>
          <div className='proficiency-group'>
              <div className='front-proficiency'>
                  <h3>Front End</h3>
                  <ul>
                      <li>HTML</li>
                      <li>CSS</li>

                  </ul>
              </div>
              <div className='back-proficiency'>
                <h3>Back End</h3>
                <ul>
                  <li>Node.js</li>
                  <li>Express.js</li>
                </ul>
          </div>
          <a href={CV} target="_blank" rel="noopener noreferrer" className='download'>
          Download Resume</a>
    </div>
    </div>
    </div>
  )
}

export default resume
