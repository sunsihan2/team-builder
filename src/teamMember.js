import React from 'react'

function TeamMember ({details}){
    if(!details){
        return <h3>Working fetching your team members</h3>
    }

    return (
        <div className='teamMember container'>
          <h2>{details.name}</h2>
          <p>Email: {details.email}</p>
          <p>Role: {details.role}</p>
          
        </div>
      )
}


export default TeamMember