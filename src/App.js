import './App.css';
import { useState, useEffect } from "react";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import React from "react";
import ContactList from "./components/ContactList";
import { v4 as uuid } from 'uuid';

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setcontacts] = useState(() => {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []
  });
  function getdata(contact) {
    console.warn(contact);
    setcontacts([...contacts, {id:uuid(),...contact}]);
  }

  function removecontact(id){
      const newcontactList = contacts.filter((contact)=>{
        return contact.id !== id;
      })

      setcontacts(newcontactList);
  }

  // useEffect(() => {
  //   const retrievedata = localStorage.getItem(LOCAL_STORAGE_KEY);
  //   if (retrievedata) {
  //     setcontacts(JSON.parse(retrievedata));
  //   }
  // }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  },[contacts]);

  return (
    <div className="ui container">
      <Header />
      <AddContact getdata={getdata} />
      <ContactList contactprop={contacts} getContactid= {removecontact} />
    </div>
  );
}

export default App;
