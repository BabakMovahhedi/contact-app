import { useLocation,Link } from "react-router-dom";

const DetaileUser = () => {
    const location=useLocation();
   
    return ( 
        <div>
            <p>Name:{location.state.name} </p>
            <p>Email:{location.state.email} </p>
            <Link to='/'>go to contact list</Link>
        </div>
     );
}
 
export default DetaileUser;