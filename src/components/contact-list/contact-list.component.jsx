import PropTypes from "prop-types";
import { useState } from "react";

const ContactList = ({ contacts, removeContact }) => {
  const [query, setQuery] = useState("");

  const showingContacts = query ===''
  ? contacts
  : contacts.filter(contact => contact.name.toLowerCase().includes(query.toLowerCase()) )

  return (
    <div className="list-contacts">
      <div className="list-contacts-top">
        <input
          className="search-contacts" 
          type="text"
          placeholder="Search Contacts"
          value={query}
          onChange={(event)=> setQuery(event.target.value.trim())} />
      </div>
      <ol className="contact-list">
        {showingContacts.map(({ id, name, avatarURL, handle }) => (
          <li key={id} className="contact-list-item">
            <div
              className="contact-avatar"
              style={{ backgroundImage: `url(${avatarURL})` }}
            ></div>
            <div className="contact-details">
              <p>{name}</p>
              <p>@{handle}</p>
            </div>
            <button
              className="contact-remove"
              onClick={() => removeContact(id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  removeContact: PropTypes.func.isRequired,
};

export default ContactList;
