import React, { useState } from "react";
import ContactList from "./components/contact-list/contact-list.component";
import contactsData from "./data/contacts.data";

function App() {
  const [contacts, setContacts] = useState(contactsData);

  const removeContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };
  return (
     <ContactList removeContact={removeContact} contacts={contacts} />
  );
}

export default App;
