import React from "react";
import user from '../images/user.png'

export default function ContactCard(props){
    const contact = props.contact;
    return(
        <div className="item">
            <img className="ui avatar image" alt="user" src={user}></img>
          <div className="content">
            <div className="header">{contact.name}</div>
            <div>{contact.email}</div>
          </div>
          <i className="trash alternate outline icon" 
          style={{color:'red',marginTop:'7px'}} onClick={()=>{props.clickhandler(contact.id)}}></i>
        </div>   
    );
}