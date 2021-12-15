import React, { useEffect, useState } from "react";
import ContactList from "./components/contact-list/contact-list.component";
// import contactsData from "./data/contacts.data"; //fake data
import * as ContactsAPI from "./utils/ContactsAPI";
import CreateContact from "./components/create-contact/create-contact.component";

function App() {
  const [contacts, setContacts] = useState([]);
  const [screen, setScreen] = useState("list");

  useEffect(() => {
    ContactsAPI.getAll().then((contacts) => setContacts(contacts));
  }, []);

  const removeContact = (contact) => {
    setContacts(contacts.filter((c) => c.id !== contact.id));
    ContactsAPI.remove(contact);
  };

  return (
    <div>
      {screen === "list" && (
        <ContactList 
          removeContact={removeContact} 
          contacts={contacts} 
          onNavigate={() => {
            setScreen("create")
          }}
          />
      )}
      {screen === "create" && <CreateContact />}
    </div>
  );
}

export default App;
