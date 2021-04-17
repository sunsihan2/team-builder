import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from "react"
import Form from "./Form"
import axios from 'axios'
import * as yup from 'yup'
import schema from './schema'
import teamMember from './teamMember'

const url = 'https://reqres.in/api/users'

const initialFormValues = {
  name: '',
  email: '',
  role: '',
  password:'',
  terms: false
}

const initialTeamMember = [];


export default function App() {

  const [teamMembersList, setTeamMembersList] = useState(initialTeamMember)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [isButtonDisabled, setIsButtonDisabled] = useState(false)
  const [formErrors, setFormErrors] = useState (initialFormValues)

  const handleError = err => {debugger}

  const addNewTeamMember = (people)=> {
    setTeamMembersList([...teamMembersList, {...people, id: Date.now() }])
  }
  
  

  const postNewTeamMember = newMember => {
    axios.post(url, newMember)
      .then(res => {
        setTeamMembersList([...teamMembersList, res.data])
        setFormValues(initialFormValues)
      })
      .catch(handleError)
  }

 
  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)

      .then(valid => {
        setFormValues({
          ...formErrors,
          [name]: ""
        })
      })

      .catch(err => {
        setFormValues({
          ...formErrors,
          [name]:err.errors[0]
        })
      })
  }

  const inputChange = (name, value) => {
    validate(name,value)
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newTeamMember = {
      name:formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role.trim(),
      password: formValues.password.trim(),
    }
    postNewTeamMember(newTeamMember)
  }



  useEffect(() => {
    schema.isValid(formValues)
      .then(valid => {
        setIsButtonDisabled(!valid)
      })
  },[formValues])

  return (
    <div className="App">
      <h1>Team builder</h1>
      <Form addNewTeamMember = {addNewTeamMember} teamMembersList={teamMembersList} values = {formValues}
            change = {inputChange} submit = {formSubmit} disabled = {isButtonDisabled} errors = {formErrors}/>
      
      {teamMembersList.map(teamMember => {
        return (
          <teamMember key={teamMember.id} details = {teamMember}/>
        )
      })}
    </div>
  );
}

