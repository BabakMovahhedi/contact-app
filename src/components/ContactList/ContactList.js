import './ContactList.css';
import { Link } from 'react-router-dom';
import Contacts from '../Contacts/Contacts';

const ContactList = ({contacts,onDelete}) => {
    return ( 
        <section className='listwraper'>

            <div className="contactlist">
           <div className='listHeader'>
           <h2>Contacts</h2>
           <Link to='/add' >
           <button>Add</button>
           </Link>
           </div>
           {contacts.map((contact)=>{
               return(
                <Contacts contact={contact} onDelete={onDelete} />
               )
           } )}
       </div>

        </section>
            );
}
 
export default ContactList;