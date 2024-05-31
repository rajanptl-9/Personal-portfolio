import React from 'react'

function Skill(props) {
    const netClr = "#233b5a";
    const { icon, name } = props; 
  return (
    <div style={{width:"fit-content", height: "fit-content", padding:"6px 12px", display:"flex", alignItems: "center", justifyContent: "space-evenly", color:"white", backgroundColor:netClr, fontSize: "18px", 
    fontFamily: "'Nunito', sans-serif",borderRadius:"8px", margin: "5px", gap:"4px"}}>
        <div className='skill-icon'>{icon}</div>
        <div>{name}</div>
    </div>
  )
}

export default Skill