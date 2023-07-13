// import React from 'react'

// const footer = () => {
//   return (
//     <div>footer</div>
//   )
// }

// export default footer

import React from 'react'; 

const copyStyle = {
    padding: '10px',
    fontWeight: 'bold'
}

function footer() {
    return(
        <div className="footer" id="footer">
            <a href="#LinkedIn" target="_blank" rel="noreferrer noopener" style={copyStyle}>LinkedIn</a>
            <p style={copyStyle}>© Michael Muniz 2023</p>
            <a href="https://github.com/m-s-muniz" target="_blank" rel="noreferrer noopener" style={copyStyle}>GitHub</a>
        </div>
    )
}

export default footer;