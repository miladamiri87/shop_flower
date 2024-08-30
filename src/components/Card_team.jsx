import React from 'react'

export default function Card_team({member}) {
    return (
        <div id='card_team_member_about'>
            <img src={member.image} alt="member1" />
            <p style={{marginTop:"0.5rem"}}>{member.name}</p>
            <p style={{ color: "#f45db4" ,marginTop:"0.5rem",display:"flex",width:"100%",textAlign:"center",justifyContent:"space-around"}}>{member.position}<span style={{color:"black"}}>|</span>{member.grade}</p>
            <div id='social_media_about_team_member'>
                <i className="bx bxl-facebook-circle"></i>
                <i className="bx bxl-linkedin-square"></i>
                <i className="bx bxl-twitter"></i>
                <i className="bx bxl-instagram"></i>
            </div>
        </div>
    )
}
