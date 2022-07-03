import "./ContactList.css";
import { Link } from "react-router-dom";
import Contacts from "../Contacts/Contacts";
import { useState, useEffect } from "react";
import getcontact from "../../services/getcontactservices";
import deletecontact from "../../services/deletecontactsservices";

const ContactList = (props) => {
  const [contacts, setContacts] = useState([]);
  const [allContacts, setAllContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // const newContact= JSON.parse(localStorage.getItem("contacts") );
    // if(newContact) setContacts(newContact);

    getcontact()
      .then((res) => {
        setContacts(res.data);
        setAllContacts(res.data);
      })

      // .then((res) => console.log(res.data))
      .catch();
  }, []);

  const onDelete = (id) => {
    const filterContact = contacts.filter((c) => c.id !== id);
    setContacts(filterContact);
    deletecontact(id)
      .then((res) => getcontact())
      .then((res) => setContacts(res.data))
      .catch();
  };

  const searchHandler = (e) => {
    setSearchTerm(e.target.value);
    const search = e.target.value;
    if (search !== "") {
      const filterContacts = allContacts.filter((c) => {
        return Object.values(c)
          .join("")
          .toLowerCase()
          .includes(search.toLowerCase());
      });
      setContacts(filterContacts);
    } else {
      setContacts(allContacts);
    }
  };

  return (
    <section className="listwraper">
      <div className="contactlist">
        <div className="listHeader">
          <h2>Contacts</h2>
          <Link to="/add">
            <button>Add</button>
          </Link>
        </div>
        <div>
          <input type="text" value={searchTerm} onChange={searchHandler} />
        </div>
        {contacts.map((contact) => {
          return (
            <Contacts contact={contact} onDelete={onDelete} key={contact.id} />
          );
        })}
      </div>
    </section>
  );
};

export default ContactList;
