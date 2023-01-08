import React from "react";
import {Link} from 'react-router-dom'
import ContactCard from '../components/ContactCard' 
export default function ContactList(props) {
    
    function deleteHandler(id){
        props.getContactid(id);
    }
    const rendercontactlist = props.contactprop.map((contact)=>{
        return (<ContactCard contact={contact} clickhandler={deleteHandler}/>);
        
    });
    return(<div className="ui celled list">
        <h2>Hello</h2>
        <Link to="/add"><button className="ui button blue">Add Contact</button></Link>
        {rendercontactlist}
     </div> );
  
}
