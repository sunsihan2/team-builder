import logo from './logo.svg';
import './App.css';
import React, {useState} from "react"
import Form from "./Form"

function App() {
  const [teamMembersList, setTeamMembersList] = useState([
    {
      id: 1,
      name: "Jason",
      email: "Jason@gmail.com",
      role: "dreamer",
    }
  ])

  const addNewTeamMember = (people)=> {
    setTeamMembersList([...teamMembersList, {...people, id: Date.now() }])
  }
  

  return (
    <div className="App">
      <h1>Team builder</h1>
      <Form addNewTeamMember = {addNewTeamMember} teamMembersList={teamMembersList}/>
    </div>
  );
}

export default App;
