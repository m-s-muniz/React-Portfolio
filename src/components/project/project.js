// import React from 'react'

// const project = () => {
//   return (
//     <div>project</div>
//   )
// }

export default project
import './project.css';
const project = ({title, children}) => {
  return (
    <div className="project-box">
      <div className="project-name">{title}</div>
      <div className='project-info'>{children}</div>
    </div>
  )
}

export default project