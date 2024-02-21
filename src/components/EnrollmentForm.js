import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

function EnrollmentForm({ formData, handleFormChange }) {
    
    const dropdownOptions = [
        { key: 'Select your course', value: '' },
        { key: 'React', value: 'react' },
        { key: 'Angular', value: 'angular' },
        { key: 'Vue', value: 'vue' },
    ]

    const checkboxOptions = [
        { key: 'HTML', value: 'html' },
        { key: 'CSS', value: 'css' },
        { key: 'JAVASCRIPT', value: 'javascript' },
    ]

    const initialValues = {
        email: '',
        bio: '',
        course: '',
        skills: [],
        courseDate: null
    } 

    
    const validationSchema = Yup.object({
      email: Yup.string().email('Invalid email format').required('Required'),
      bio: Yup.string().required('Required'),
      course: Yup.string().required('Required'),
      courseDate: Yup.date().required('Required').nullable(),
      skills: Yup.array().min(1, 'Select at least one skill'),
    })
    
    const handleFormSubmit = (values) => {
      console.log('Form Data', values);
      handleFormChange(values); 
    };

  // console.log('Initial Values', initialValues)
  
    return (
        <div>
        <h2>Enrollment Form </h2>
        <Formik initialValues={formData} onSubmit={handleFormSubmit} validationSchema={validationSchema}  enableReinitialize>
            {
                formik => {
                    return (
                        <Form>
             <FormikControl
              control='input'
              type='email'
              label='Email'
              name='email'
            />
            <FormikControl
              control='textarea'
              label='Bio'
              name='bio'
            />
            <FormikControl
              control='select'
              label='Course'
              name='course'
              options={dropdownOptions}
            />
            <FormikControl
              control='checkbox'
              label='Your skillset'
              name='skills'
              options={checkboxOptions}
            />
            <FormikControl
              control='date'
              label='Course date'
              name='courseDate'
            />
            <button type='submit' disabled={!formik.isValid}>
              Submit
            </button>
            </Form>
                    )
                }
            }
        </Formik>
    </div>    
    )
}

export default EnrollmentForm

































// SIMPLE CODE FOR RENDERING SECOND COMP WHEN FIRST COMP IS SUBMITTED
// import React, { useState } from 'react';
// import { Formik, Form } from 'formik'
// import * as Yup from 'yup'
// import FormikControl from './FormikControl'
// import EnrollmentFormDisplay from './EnrollmentFormDisplay';

// function EnrollmentForm(submittedValues) {
//     const [formData, setFormData] = useState(null);

//     const onSubmit = (values ) =>{ 
//         console.log('Form Data', values);
//         setFormData(values);
//     }
    
//     const dropdownOptions = [
//         { key: 'Select your course', value: '' },
//         { key: 'React', value: 'react' },
//         { key: 'Angular', value: 'angular' },
//         { key: 'Vue', value: 'vue' },
//     ]

//     const checkboxOptions = [
//         { key: 'HTML', value: 'html' },
//         { key: 'CSS', value: 'css' },
//         { key: 'JAVASCRIPT', value: 'javascript' },
//     ]

//     const defaultInitialValues = {
//         email: '',
//         bio: '',
//         course: '',
//         skills: [],
//         courseDate: null
//     } 

//     const initialValues = submittedValues ? submittedValues : defaultInitialValues;
//     // const [initialValues, setInitialValues] = useState(submittedValues || defaultInitialValues);
//     console.log('Initial Values', initialValues)
//     console.log('Initial SubmittedValues', submittedValues)

//     const validationSchema = Yup.object({
//         email: Yup.string().email('Invalid email format').required('Required'),
//         bio: Yup.string().required('Required'),
//         course: Yup.string().required('Required'),
//         courseDate: Yup.date().required('Required').nullable(),
//         skills: Yup.array().min(1, 'Select at least one skill'),
//     })

//     return (
//         <div>
//         <h2>Enrollment Form </h2>
//         <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
//             {
//                 formik => {
//                     return (
//                         <Form>
//              <FormikControl
//               control='input'
//               type='email'
//               label='Email'
//               name='email'
//             />
//             <FormikControl
//               control='textarea'
//               label='Bio'
//               name='bio'
//             />
//             <FormikControl
//               control='select'
//               label='Course'
//               name='course'
//               options={dropdownOptions}
//             />
//             <FormikControl
//               control='checkbox'
//               label='Your skillset'
//               name='skills'
//               options={checkboxOptions}
//             />
//             <FormikControl
//               control='date'
//               label='Course date'
//               name='courseDate'
//             />
//             <button type='submit' disabled={!formik.isValid}>
//               Submit
//             </button>
//             </Form>
//                     )
//                 }
//             }
//         </Formik>
//         {formData && <EnrollmentFormDisplay submittedValues={formData} />}  
//     </div>    
//     )
// }

// export default EnrollmentForm































// PRACTICE CODE FOR SYNCING OF ONE STATE
// import React, { useState } from 'react';
// import { Formik, Form } from 'formik'
// import * as Yup from 'yup'
// import FormikControl from './FormikControl'
 
// const initialValues = {
//   email: '',
//   bio: '',
//   course: '',
//   skills: [],
//   courseDate: null
// }
 
// function EnrollmentForm(props) {
//   console.log('first time prop',props);
//   const {formDataParam,setFormDataValues} = props;
//     const [formData, setFormData] = useState(formDataParam ? formDataParam : initialValues );
//     console.log(formData?'second time rendering': 'first time');
//     console.log({formData});
 
 
//     const onSubmit = (values ) =>{
//         console.log('Form Data', values);
//         setFormDataValues(values);
//         setFormData(values);
//     }
   
//     const dropdownOptions = [
//         { key: 'Select your course', value: '' },
//         { key: 'React', value: 'react' },
//         { key: 'Angular', value: 'angular' },
//         { key: 'Vue', value: 'vue' },
//     ]
 
//     const checkboxOptions = [
//         { key: 'HTML', value: 'html' },
//         { key: 'CSS', value: 'css' },
//         { key: 'JAVASCRIPT', value: 'javascript' },
//     ]
 
   
 
//     const validationSchema = Yup.object({
//         email: Yup.string().email('Invalid email format').required('Required'),
//         bio: Yup.string().required('Required'),
//         course: Yup.string().required('Required'),
//         courseDate: Yup.date().required('Required').nullable(),
//         skills: Yup.array().min(1, 'Select at least one skill'),
//     })
 
   
//     return (
//         <div>
//         <h2>Enrollment Form</h2>
//         <Formik initialValues={formData} onSubmit={onSubmit} validationSchema={validationSchema}>
//             {
//                 formik => {
//                     return (
//                         <Form>
//              <FormikControl
//               control='input'
//               type='email'
//               label='Email'
//               name='email'
//             />
//             <FormikControl
//               control='textarea'
//               label='Bio'
//               name='bio'
//             />
//             <FormikControl
//               control='select'
//               label='Course'
//               name='course'
//               options={dropdownOptions}
//             />
//             <FormikControl
//               control='checkbox'
//               label='Your skillset'
//               name='skills'
//               options={checkboxOptions}
//             />
//             <FormikControl
//               control='date'
//               label='Course date'
//               name='courseDate'
//             />
//             <button type='submit' disabled={!formik.isValid}>
//               Submit
//             </button>
//             </Form>
//                     )
//                 }
//             }
//         </Formik>
//         {/* {formData && <EnrollmentForm formData={formData} />}   */}
//     </div>    
//     )
// }
 
// export default EnrollmentForm
 
 
 
