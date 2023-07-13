// import React from 'react'

// const contact = () => {
//   return (
//     <div>contact</div>
//   )
// }

// export default contact

// import React, { useState } from 'react';
// import { validateEmail } from '../utils/validateEmail'


// const padding = {
//   padding: '50px'
// }

// const errorStyle = {
//   backgroundColor: 'black',
//   color: 'yellow'
// }

// function Contact() {
//     const [formState, setFormState] = useState({ name: '', email: '', message: '' })

//     const [errorMessage, setErrorMessage] = useState('')

//     const { name, email, message } = formState;

//     function handleChange(e) {
//       if (e.target.name === 'email') {
//         const validate = validateEmail(e.target.value);

//         if (!validate) {
//           setErrorMessage('Please enter a valid email.');
//         } else {
//           setErrorMessage('')
//         }
//       } else if (!e.target.value.length) {
//         setErrorMessage(`${e.target.name} is required.`)
//       } else setErrorMessage();

//       if (!errorMessage) {
//         setFormState({ ...formState, [e.target.name]: e.target.value })
//       }
//     }

//     function handleSubmit(e) {
//       e.preventDefault();
//     }

//     return(
//         <div className="contact" >
//         <h1 className="title">Contact Me</h1>
//         <form>
//           <div className="form-group" style={padding}>
//             <label htmlFor="name">Your name:</label>
//             <input type="text" className="form-control" id="name" placeholder="Leave your name here..." defaultValue={name} onBlur={handleChange}/>
//           </div>
//           <div className="form-group" style={padding}>
//             <label htmlFor="email">Your email:</label>
//             <textarea name="email" id="email" placeholder="Enter your email here..." className="form-control" defaultValue={email} onBlur={handleChange}></textarea>
//           </div>
//           <div className="form-group" style={padding}>
//             <label htmlFor="message">Your message:</label>
//             <textarea name="message" id="message" placeholder="Enter your message here..." className="form-control" defaultValue={message} onBlur={handleChange}></textarea>
//           </div>

//           {errorMessage && (
//             <div style={errorStyle}>
//               <h3>Form Errors:</h3>
//               <p className="error">{errorMessage}</p>
//             </div>
//           )}

//           <button className="btn btn-dark"  onSubmit={handleSubmit}>Submit Message</button>
//         </form>
//         <p style={padding}>Please feel free to contact me directly. </p>
          
//           <h5>
//             Call me at <a href="tel:123.456.7890" >123-456-7890</a>
//           </h5>
//           <h5>
//             Email me at <a href="mailto:someone@somewhere.com" >someoneone@somewhere.com</a>
//           </h5>
//       </div>
//     )
// }

// export default Contact;








// import React, { useState } from 'react';
// import { validateEmail } from '../utils/validateEmail';

// const containerStyle = {
//   background: 'var(--color-bg-variant)',
//   padding: '2.4rem 5rem',
//   borderRadius: '2rem',
//   border: '1px solid transparent',
//   transition: 'var(--transition)',
// };

// const formStyle = {
//   padding: '8rem',
// };

// const errorStyle = {
//   backgroundColor: 'black',
//   color: 'yellow',
// };

// function Contact() {
//   const [formState, setFormState] = useState({ name: '', email: '', message: '' });
//   const [errorMessage, setErrorMessage] = useState('');

//   const { name, email, message } = formState;

//   function handleChange(e) {
//     if (e.target.name === 'email') {
//       const validate = validateEmail(e.target.value);

//       if (!validate) {
//         setErrorMessage('Please enter a valid email.');
//       } else {
//         setErrorMessage('');
//       }
//     } else if (!e.target.value.length) {
//       setErrorMessage(`${e.target.name} is required.`);
//     } else setErrorMessage('');

//     if (!errorMessage) {
//       setFormState({ ...formState, [e.target.name]: e.target.value });
//     }
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//   }

//   return (
//     <div className="contact" style={containerStyle}>
//       <h1 className="title">Contact Me</h1>
//       <form style={formStyle}>
//         <div className="form-group">
//           <label htmlFor="name">Your name:</label>
//           <input type="text" className="form-control" id="name" placeholder="Leave your name here..." value={name} onChange={handleChange} />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Your email:</label>
//           <textarea name="email" id="email" placeholder="Enter your email here..." className="form-control" value={email} onChange={handleChange}></textarea>
//         </div>
//         <div className="form-group">
//           <label htmlFor="message">Your message:</label>
//           <textarea name="message" id="message" placeholder="Enter your message here..." className="form-control" value={message} onChange={handleChange}></textarea>
//         </div>

//         {errorMessage && (
//           <div style={errorStyle}>
//             <h3>Form Errors:</h3>
//             <p className="error">{errorMessage}</p>
//           </div>
//         )}

//         <button className="btn btn-dark" onSubmit={handleSubmit}>
//           Submit Message
//         </button>
//       </form>
//       <p>Please feel free to contact me directly.</p>

//       <h5>
//         Call me at <a href="tel:123.456.7890">123-456-7890</a>
//       </h5>
//       <h5>
//         Email me at <a href="mailto:someone@somewhere.com">someoneone@somewhere.com</a>
//       </h5>
//     </div>
//   );
// }

// export default Contact;






// import React, { useState, useEffect } from 'react';
// import { validateEmail } from '../utils/validateEmail';

// const containerStyle = {
//   background: 'var(--color-bg-variant)',
//   padding: '2.4rem 5rem',
//   borderRadius: '2rem',
//   border: '1px solid transparent',
//   transition: 'var(--transition)',
// };

// const formStyle = {
//   padding: '8rem',
// };

// const errorStyle = {
//   backgroundColor: 'black',
//   color: 'yellow',
// };

// function Contact() {
//   const [formState, setFormState] = useState({ name: '', email: '', message: '' });
//   const [errorMessage, setErrorMessage] = useState('');

//   const { name, email, message } = formState;

//   useEffect(() => {
//     if (!errorMessage) {
//       setFormState({ ...formState, [name]: name, [email]: email, [message]: message });
//     }
//   }, [errorMessage]);

//   function handleChange(e) {
//     const { name, value } = e.target;
  
//     if (name === 'email') {
//       const validate = validateEmail(value);
  
//       if (!validate) {
//         setErrorMessage('Please enter a valid email.');
//       } else {
//         setErrorMessage('');
//       }
//     } else if (!value.trim()) {
//       setErrorMessage(`${name} is required.`);
//     } else {
//       setErrorMessage('');
//     }
  
//     setFormState((prevState) => ({
//       ...prevState,
//       [name]: e.target.value,
//     }));
//   }
  

//   function handleSubmit(e) {
//     e.preventDefault();

//     if (name && email && message) {
//       // Perform the form submission logic here
//       console.log('Form submitted:', formState);
//     } else {
//       setErrorMessage('Please fill out all the fields.');
//     }
//   }

//   return (
//     <div className="contact" style={containerStyle}>
//       <h1 className="title">Contact Me</h1>
//       <form style={formStyle} onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="name">Your name:</label>
//           <input type="text" className="form-control" id="name" placeholder="Leave your name here..." value={name} onChange={handleChange} />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Your email:</label>
//           <input type="email" className="form-control" id="email" placeholder="Enter your email here..." value={email} onChange={handleChange} />
//         </div>
//         <div className="form-group">
//           <label htmlFor="message">Your message:</label>
//           <textarea name="message" id="message" placeholder="Enter your message here..." className="form-control" value={message} onChange={handleChange}></textarea>
//         </div>

//         {errorMessage && (
//           <div style={errorStyle}>
//             <h3>Form Errors:</h3>
//             <p className="error">{errorMessage}</p>
//           </div>
//         )}

//         <button type="submit" className="btn btn-dark">
//           Submit Message
//         </button>
//       </form>
//       <p>Please feel free to contact me directly.</p>

//       <h5>
//         Call me at <a href="tel:123.456.7890">123-456-7890</a>
//       </h5>
//       <h5>
//         Email me at <a href="mailto:someone@somewhere.com">someoneone@somewhere.com</a>
//       </h5>
//     </div>
//   );
// }

// export default Contact;




import React, { useState } from 'react';
import { validateEmail } from '../utils/validateEmail';

const padding = {
  padding: '50px'
};

const errorStyle = {
  backgroundColor: 'black',
  color: 'yellow'
};

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [touchedFields, setTouchedFields] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const { name, email, message } = formState;

  function handleChange(e) {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    if (fieldName === 'email') {
      const validate = validateEmail(fieldValue);

      if (!validate) {
        setFormState({ ...formState, [fieldName]: fieldValue });
        setTouchedFields({ ...touchedFields, [fieldName]: true });
        setErrorMessage('Please enter a valid email.');
      } else {
        setErrorMessage('');
      }
    } else {
      setFormState({ ...formState, [fieldName]: fieldValue });
      setTouchedFields({ ...touchedFields, [fieldName]: true });

      if (!fieldValue.length && touchedFields[fieldName]) {
        setErrorMessage(`${fieldName} is required.`);
      }
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Check if any of the fields are empty and touched
    const isAnyFieldEmptyAndTouched = Object.keys(formState).some(
      (fieldName) => !formState[fieldName] && touchedFields[fieldName]
    );

    if (isAnyFieldEmptyAndTouched) {
      setErrorMessage('Please complete all fields.');
      return;
    }

    // Form submission logic here
  }

  return (
    <div className="contact">
      <h1 className="title">Contact Me</h1>
      <form>
        <div className="form-group" style={padding}>
          <label htmlFor="name">Your name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Leave your name here..."
            defaultValue={name}
            onBlur={handleChange}
            name="name"
          />
        </div>
        <div className="form-group" style={padding}>
          <label htmlFor="email">Your email:</label>
          <textarea
            name="email"
            id="email"
            placeholder="Enter your email here..."
            className="form-control"
            defaultValue={email}
            onBlur={handleChange}
          ></textarea>
        </div>
        <div className="form-group" style={padding}>
          <label htmlFor="message">Your message:</label>
          <textarea
            name="message"
            id="message"
            placeholder="Enter your message here..."
            className="form-control"
            defaultValue={message}
            onBlur={handleChange}
          ></textarea>
        </div>

        {errorMessage && (
          <div style={errorStyle}>
            <h3>{errorMessage}</h3>
            <p className="error">{errorMessage}</p>
          </div>
        )}

        <button className="btn btn-dark" onClick={handleSubmit}>
          Submit Message
        </button>
      </form>
      <p style={padding}>Please feel free to contact me directly. </p>

      <h5>
        Call me at <a href="tel:123.456.7890">123-456-7890</a>
      </h5>
      <h5>
        Email me at{' '}
        <a href="mailto:someone@somewhere.com">someoneone@somewhere.com</a>
      </h5>
    </div>
  );
}

export default Contact;

