import React, { useState } from 'react';

const teamList = [
    {
        name: 'Casper',
        role: 'Ghost'
    },
    {
        name: 'Dracula',
        role: 'Vampire'
    },
    {
        name: 'Lucien',
        role: 'Lycan'
    }
]

export default function TeamForm (){
    const [formValues, setFormValues] = useState({ name: '', role: ''});
    const [teamMember, SetTeamMember] = useState(teamList);

    const submit = (e) => {
        e.preventDefault();
        const newTeamMember = {
            name: formValues.name.trim(),
            role: formValues.role.trim()
            }
            SetTeamMember(teamMember.concat(newTeamMember))
            setFormValues({ name: '', role: '' })
    };

    const change = (e) => {
        const { name, value } = e.target;
        setFormValues({...formValues, [name]: value});
    }


    return(
      <div> 
        <h1> Meet the team! </h1>
        {teamMember.map((ea,idx) => {
            <div key={idx}>
                {ea.name} is a {ea.role}
            </div>
        })}
        <h2> Add a team member: </h2>
        <form onSubmit={submit}>
            <input 
              type='text'
              value={formValues.name}
              name='name'
              onChange={change}
              placeholder='Team member name'
            />
            <input 
              type='text'
              value={formValues.role}
              name='role'
              onChange={change}
              placeholder='Role'
            />
            <input
              type='submit'
            />


        </form>

      </div>  
    )

}