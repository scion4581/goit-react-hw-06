import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
// import contactsData from '../data/contacts.json';
import SearchBox from '../SearchBox/SearchBox';

import './App.css'

export default function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList/>
    </div>
  );
}
