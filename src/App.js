import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import React from "react";
import ContactList from "./components/ContactList";
import { v4 as uuid } from "uuid";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import ContactInfo from "./components/ContactInfo";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setcontacts] = useState(() => {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
  });
  function getdata(contact) {
    console.warn(contact);
    setcontacts([...contacts, { id: uuid(), ...contact }]);
  }

  function removecontact(id) {
    const newcontactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setcontacts(newcontactList);
  }


  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Router>
      <Header />
        <Routes>
  
          <Route path="/" exact element={<ContactList contactprop={contacts} getContactid={removecontact} />}></Route>
          <Route path="/add" element={<AddContact getdata={getdata} />}></Route>
          <Route path="/contact/:id" element={<ContactInfo/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

  // useEffect(() => {
  //   const retrievedata = localStorage.getItem(LOCAL_STORAGE_KEY);
  //   if (retrievedata) {
  //     setcontacts(JSON.parse(retrievedata));
  //   }
  // }, []);