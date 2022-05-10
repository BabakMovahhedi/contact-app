import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import addcontact from "../../services/addcontactsservices";
import getcontact from "../../services/getcontactservices";
import './AddContact.css';



const AddContact = () => {
    const[contact,setContact]=useState({name:'', email:'' });
    const navigate= useNavigate();
    const changeHandler= (e)=>{
        setContact({...contact,[e.target.name]:e.target.value});
    };


    const AddContactHandler=(contact)=>{             
        addcontact(contact)
        .then((res)=>getcontact())        
        .catch()
    };

    const submitform=(e)=>{
        e.preventDefault();
        AddContactHandler(contact);
        setContact({name:'',email:''});
       navigate('/');
        
    };

    return ( 
        <form onSubmit={submitform}>
            <div className="formcontrol">
                <label>name</label>
                <input 
                type='text' 
                name='name' 
                value={contact.name} 
                onChange={changeHandler}  />
            </div>
            <div className="formcontrol">
                <label>email</label>
                <input 
                type='text' 
                name='email' 
                value={contact.email} 
                onChange={changeHandler}  />
            </div>
            <button type="submite">Add</button>
        </form>
     );
}
 
export default AddContact;
