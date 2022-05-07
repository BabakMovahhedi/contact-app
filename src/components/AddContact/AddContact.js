import { useState } from "react";

const AddContact = ({AddContactHandler}) => {
    const[contact,setContact]=useState({name:'', email:'' });

    const changeHandler= (e)=>{
        setContact({...contact,[e.target.name]:e.target.value});
    };

    const submitform=(e)=>{
        e.preventDefault();
        AddContactHandler(contact);
        setContact({name:'',email:''})
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
