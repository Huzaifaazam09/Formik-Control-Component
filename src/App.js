import './App.css';
import React, { useState } from 'react';
import EnrollmentForm from './components/EnrollmentForm';

function App() {
  const [formData, setFormData] = useState({
    email: '',
    bio: '',
    course: '',
    skills: [],
    courseDate: null
  });

  const handleFormChange = (values) => {
    setFormData(values);
  };

  return (
    <div className="App">
      <EnrollmentForm formData={formData} handleFormChange={handleFormChange} />
      <EnrollmentForm formData={formData} handleFormChange={handleFormChange} />
    </div>
  );
}

export default App;


































// SIMPLE APP.JS COMPONENT FOR RENDERRING DIFFERENT COMP
// import './App.css';
// import EnrollmentForm from './components/EnrollmentForm';
// import EnrollmentFormDisplay from './components/EnrollmentFormDisplay';
// import FormikContainer from './components/FormikContainer';
// import LoginForm from './components/LoginForm';
// import RegistrationForm from './components/RegistrationForm';

// function App() {
//   return (
//     <div className="App">
//      {/* <FormikContainer/> */}
//      {/* <LoginForm/>  */}
//      {/* <RegistrationForm/> */}
//      <EnrollmentForm/>
//      {/* <EnrollmentFormDisplay/> */}
//     </div>
//   );
// }

// export default App;



























// PRACTICE CODE FOR SYNCING OF ONE STATE
// import './App.css';
// import { useState } from 'react';
// import EnrollmentForm from './components/EnrollmentForm';
// import EnrollmentFormDisplay from './components/EnrollmentFormDisplay';
// import FormikContainer from './components/FormikContainer';
// import LoginForm from './components/LoginForm';
// import RegistrationForm from './components/RegistrationForm';

// function App() {
//   console.log("app1");
//   const [formData, setFormData] = useState(null);
//   const [submittedFormData, setSubmittedFormData] = useState(null);


//   const setFormDataValues = (values ) =>{
//     console.log('Form Data', values);
//     setFormData(null);
//     setSubmittedFormData(values);
// }


//   return (
//     <div className="App">
//      {/* <FormikContainer/> */}
//      {/* <LoginForm/>  */}
//      {/* <RegistrationForm/> */}
//       <EnrollmentForm formData={formData} setFormDataValues={setFormDataValues} />
     
//       {submittedFormData && (<EnrollmentForm formData={submittedFormData} setFormDataValues={setFormDataValues} />)}


//     </div>
//   );
// }


// export default App;


