import React, {useState} from "react"

const Form = (props) => {

    const {addNewTeamMember, teamMembersList, values,change, submit, disabled, errors }= props
    const [people, setPeople] = useState({name: "", email: "", role: ""})

    const handleChanges = (event) => {
        const newStateObj = {...people, [event.target.name]: event.target.value}
        setPeople(newStateObj)
        const {name, value, type, checked} = event.target
        const valueToUse = type ==="checkbox"? checked: value
        change(name, valueToUse)
    }

    const submitForm = (event) => {
        event.preventDefault();
        props.addNewTeamMember(people)
        setPeople({name: "", email:"", role: ""})
        submit()
    }

    return (
        <form onSubmit = {submitForm}>
            <h2>Add a team member</h2>

            

            <div className = 'errors'>
                <div>{errors.name}</div>
                <div>{errors.email}</div>
                <div>{errors.role}</div>
                <div>{errors.password}</div>
                <div>{errors.terms}</div>
            </div>

            <label htmlFor = "name">Name:</label>
            <input id="name" type= "text"
                placeholder = "Enter a team member name"
                name= "name"
                velue = {people.name}
                onChange = {handleChanges}/>

            <label htmlFor = "email">Email:</label>
            <input id="email" type= "email"
                placeholder = "Enter a team member Email"
                name= "email"
                velue = {people.email}
                onChange = {handleChanges}/>

            <label htmlFor = "role">Role:</label>
            <input id="role" type= "text"
                placeholder = "Enter a team member role"
                name= "role"
                velue = {people.role}
                onChange = {handleChanges}/>
            
            <label htmlFor = "password">Password:</label>
            <input id="password" type= "text"
                placeholder = "Enter a password"
                name= "password"
                velue = {people.password}
                onChange = {handleChanges}/>

            <label> Terms and Conditions
                <input type="checkbox" name="terms" onChange = {handleChanges} 
                    checked = {values.terms}/>
            </label>
            <button type = "submit" disabled = {disabled} > Add to the team member list </button>
       
        </form>
    )
}

export default Form;