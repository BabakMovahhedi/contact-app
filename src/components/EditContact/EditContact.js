import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import getcontact from "../../services/getcontactservices";
import putcontact from "../../services/putContactServices";
// import './AddContact.css';
const EditContact = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [contact, setContact] = useState({
    name: location.state.name,
    email: location.state.email,
  });

  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const submitform = (e) => {
    e.preventDefault();
    editContactHandler(contact, location.state.id);
    setContact({ name: "", email: "" });
    navigate("/");
  };

  const editContactHandler = (contact, id) => {
    putcontact(id, contact)
      .then((res) => getcontact())
      .catch();
  };

  return (
    <form onSubmit={submitform}>
      <div className="formcontrol">
        <label>name</label>
        <input
          type="text"
          name="name"
          value={contact.name}
          onChange={changeHandler}
        />
      </div>
      <div className="formcontrol">
        <label>email</label>
        <input
          type="text"
          name="email"
          value={contact.email}
          onChange={changeHandler}
        />
      </div>
      <button type="submite">Edit</button>
      <Link to="/">go to contact list</Link>
    </form>
  );
};

export default EditContact;
