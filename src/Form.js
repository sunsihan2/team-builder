import React, {useState} from "react"

const Form = (props) => {

    const [people, setPeople] = useState({name: "", email: "", role: ""})

    const handleChanges = (event) => {
        const newStateObj = {...people, [event.target.name]: event.target.value}
        setPeople(newStateObj)
    }

    const submitForm = (event) => {
        event.preventDefault();
        props.addNewTeamMember(people)
        setPeople({name: "", email:"", role: ""})
    }
    return (
        <form onSubmit = {submitForm}>
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

<           label htmlFor = "role">Role:</label>
            <input id="role" type= "text"
                placeholder = "Enter a team member role"
                name= "role"
                velue = {people.role}
                onChange = {handleChanges}/>
            
            <button type = "submit"> Add to the team member list </button>

            <div className = "list">
                {props.teamMembersList.map(person => (
                    <div className = "person" key = {person.id}>
                        <h2>{person.name}</h2>
                        <p>{person.email}</p>
                        <p>{person.role}</p>
                    </div>
                ))}

            </div>
        </form>
    )
}

export default Form;