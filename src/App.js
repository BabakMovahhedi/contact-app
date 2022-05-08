
import { useEffect, useState } from 'react';
import './App.css';
import AddContact from './components/AddContact/AddContact';
import ContactList from './components/ContactList/ContactList';


function App() {
  const[contacts,setContacts]=useState([])

  const onDelete=(id)=>{
    const filterContact=contacts.filter((c)=> c.id!== id );
    setContacts(filterContact);
  };
  const AddContactHandler=(contact)=>{
  const newContact={
    id:Math.random()*100,
    name:contact.name,
    email:contact.email
  };
  setContacts([...contacts,newContact]);
};


useEffect(()=>{
  const newContact= JSON.parse(localStorage.getItem("contacts") );
  if(newContact) setContacts(newContact);
},[]);

useEffect(()=>{
  localStorage.setItem("contacts",JSON.stringify(contacts) );
},[contacts]);



  return (
    <div className="App">
    <h1>contact App</h1>
    <AddContact AddContactHandler={AddContactHandler} />
    <ContactList contacts={contacts} onDelete={onDelete} />
    </div>
  );
}

export default App;
