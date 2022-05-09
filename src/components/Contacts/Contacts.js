import { useEffect } from 'react';
import {Link,useNavigate} from 'react-router-dom';


const Contacts = ({contact,onDelete}) => {
    
    const{name,email,id}=contact;
    return ( 
    <div key={id} className='item'>
    <Link to={`user/${id}`} state={contact} >
    <div className='user' >    
    <p>name:{name} </p>
    <p>email:{email} </p>
    </div>
    </Link>
    
    <button onClick={()=> onDelete(id)}>delete</button>
   </div> );
}
 
export default Contacts;