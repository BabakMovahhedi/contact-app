
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AddContact from './components/AddContact/AddContact';
import ContactList from './components/ContactList/ContactList';

import './App.css';
import DetaileUser from './components/DetaileUser/DetaileUser';


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
  // const newContact= JSON.parse(localStorage.getItem("contacts") );
  // if(newContact) setContacts(newContact);
  
},[]);

useEffect(()=>{
  localStorage.setItem("contacts",JSON.stringify(contacts) );
},[contacts]);



  return (
    <div className="App">
    <h1>contact App</h1>
    <Routes>
      <Route path='/user/:id' element={<DetaileUser/>} />
      <Route path='/add' element={ <AddContact  AddContactHandler={AddContactHandler}  /> } />
      <Route path='/' element={ <ContactList contacts={contacts} onDelete={onDelete}/>} />
     
    </Routes>
    {/* <AddContact    AddContactHandler={AddContactHandler} /> */}
    {/* <ContactList contacts={contacts} onDelete={onDelete} /> */}
    </div>
  );
}

export default App;
