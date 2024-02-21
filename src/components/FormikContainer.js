import React from 'react'
import {Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

function FormikContainer() {
    const dropdownOptions = [
        {key: 'Select an option', value:'' },
        {key: 'Option 1', value:'option1' },
        {key: 'Option 2', value:'option2' },
        {key: 'Option 3', value:'option3' },
        {key: 'Option 4', value:'option4' },
    ]

    const radioOptions = [
        {key: 'Option 1', value:'rOption1' },
        {key: 'Option 2', value:'rOption2' },
        {key: 'Option 3', value:'rOption3' },
        {key: 'Option 4', value:'rOption4' },
    ]

    const checkboxOptions = [
        {key: 'Option 1', value:'chOption1' },
        {key: 'Option 2', value:'chOption2' },
        {key: 'Option 3', value:'chOption3' },
        {key: 'Option 4', value:'chOption4' },
    ]

    const initialValues = {
        email: 'asd@gmail.com',
        description: '',
        selectOption: '',
        rOption: '',
        chOption: [],
        birthDate: null
    }
    const validationSchema = Yup.object({
        email: Yup.string().required('Required!'),
        description: Yup.string().required('Required!'),
        selectOption: Yup.string().required('Required!'),
        rOption: Yup.string().required('Required!'),
        chOption: Yup.array().required('Required!'),
        birthDate: Yup.date().required('Required!').nullable()
    })

    const onSubmit = values => console.log ('Form data', values)

  return (
    <Formik initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}>
        {
            formik => 
            <Form>
                <FormikControl control='input' type='email' label='Email' name='email' />
                <FormikControl control='textarea' label='Description' name='description' />
                <FormikControl control='select' label='Select a topic' name='selectOption' options= {dropdownOptions} />
                <FormikControl control='radio' label='Radio Topic' name='rOption' options= {radioOptions} />
                <FormikControl control='checkbox' label='Checkbox Topic' name='chOption' options= {checkboxOptions} />
                <FormikControl control='date' label='Pick a Date' name='birthDate'/>
                <button type='submit'>Submit</button>
            </Form>
        }
    </Formik>
  )
}

export default FormikContainer