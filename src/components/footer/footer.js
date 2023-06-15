// import React from 'react'

// const footer = () => {
//   return (
//     <div>footer</div>
//   )
// }

// export default footer

import React from 'react'; 

// const imgStyle = {
//     width: '75px',
//     height: '75px',
//     padding: '10px'
// }

const copyStyle = {
    padding: '10px',
    fontWeight: 'bold'
}

function footer() {
    return(
        <div class="footer" id="footer">
            <a href="#LinkedIn" target="_blank" rel="noreferrer noopener">LinkedIn</a>
            <p style={copyStyle}>© Michael Muniz 2023</p>
            <a href="https://github.com/m-s-muniz" className='btn' target="_blank" rel="noreferrer noopener">GitHub</a>
        </div>
    )
}

export default footer;