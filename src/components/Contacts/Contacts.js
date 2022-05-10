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

    <div>
    <button  onClick={()=> onDelete(id)}>delete</button>
    <Link to={`edit/${id}`} state={contact} >

    <button className='editBtn' >Edite</button>
    </Link>    
    </div>
    
   </div> );
}
 
export default Contacts;