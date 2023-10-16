// import './App.css';
import React from 'react';
import Header from "./Header"
import AddContact from './AddContact';
import ContactList from './ContactList';

const contacts = [
  {
    id: 1,
    name: "Anup Gupta",
    email: "anup94622@gmail.com",
  },
  {
    id: 2,
    name: "Sanskriti Gupta",
    email: "guptasanskriti08@gmail.com"
  }
]
function App() {
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts = {contacts}/>
    </div>
  );
}

export default App;
