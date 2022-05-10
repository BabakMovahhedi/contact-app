import './ContactList.css';
import { Link } from 'react-router-dom';
import Contacts from '../Contacts/Contacts';
import { useState,useEffect} from 'react';
import getcontact from '../../services/getcontactservices';
import deletecontact from '../../services/deletecontactsservices';

const ContactList = (props) => {
    const[contacts,setContacts]=useState([])
   

    const onDelete=(id)=>{
        const filterContact=contacts.filter((c)=> c.id!== id );
        setContacts(filterContact);
        deletecontact(id)
        .then((res)=>getcontact())
        .then((res)=>setContacts(res.data))
        .catch()
      };

    useEffect(()=>{
        // const newContact= JSON.parse(localStorage.getItem("contacts") );
        // if(newContact) setContacts(newContact);
        getcontact()
        .then((res)=>setContacts(res.data) )
        .catch()
      },[]);

      
    return ( 
        <section className='listwraper'>

            <div className="contactlist">
           <div className='listHeader'>           
           <h2>Contacts</h2>
           <Link to='/add' >
           <button>Add</button>
           </Link>
           </div  >
           
           {contacts.map((contact)=>{
               return(
                <Contacts contact={contact} onDelete={onDelete} key={contact.id} />
               )
           } )}
       </div>

        </section>
            );
}
 
export default ContactList;