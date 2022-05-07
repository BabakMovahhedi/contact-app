const ContactList = ({contacts,onDelete}) => {
    return ( 
       <div>
           {contacts.map((contact)=>{
               return(
                <div key={contact.id}>
                <p>name:{contact.name} </p>
                <p>email:{contact.email} </p>
                <button onClick={()=> onDelete(contact.id)}>delete</button>
               </div>
               )
           } )}
       </div>
     );
}
 
export default ContactList;