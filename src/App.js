import React from 'react';
import ContactList from './components/contact-list/contact-list.component';
import contacts from './data/contacts.data';

function App() {
  return (
   <ContactList contacts={contacts} />
  );
}

export default App;
