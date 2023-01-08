import React from "react";
import ContactCard from '../components/ContactCard' 
export default function ContactList(props) {
    console.log(props.contactprop);

    function deleteHandler(id){
        props.getContactid(id);
    }
    const rendercontactlist = props.contactprop.map((contact)=>{
        return (<ContactCard contact={contact} clickhandler={deleteHandler}/>);
        
    });
    return(<div className="ui celled list">
            {rendercontactlist}
     </div> );
  
}
