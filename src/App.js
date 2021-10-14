import React from 'react';
import Form from './components/Form';
import TableContacts from './components/TableContacts';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewForm: false,
      contacts: [],
    };
    this.newContact = this.newContact.bind(this);
    this.editContact = this.editContact.bind(this);
    this.removeContact = this.removeContact.bind(this);
    this.contactsUpdate = this.contactsUpdate.bind(this);
  }

  newContact(data) {
    this.setState((state) => ({
      contacts: [...state.contacts, data],
      viewForm: false,
    }));
  }

  contactsUpdate() {
    const { contacts } = this.state;
    const contactsUpdate = [...contacts];
    return contactsUpdate;
  }

  editContact(contact, indexContact) {
    const contactsUpdate = this.contactsUpdate();
    contactsUpdate.splice(indexContact, 1, contact);
    this.setState({ contacts: contactsUpdate });
  }

  removeContact(index) {
    const contactsUpdate = this.contactsUpdate();
    contactsUpdate.splice(index, 1);
    this.setState({ contacts: contactsUpdate });
  }

  render() {
    const { viewForm, contacts } = this.state;
    return (
      <div className="App">
        <header>
          <h1>Lista de contatos</h1>
          <button 
            className="btn btn-add"
            onClick={ () => this.setState({ viewForm: true }) }
          >
            Novo contato
          </button>
        </header>
        <div className="contacts">
          { contacts.length > 0 ? (
            <TableContacts
              contacts={ contacts }
              editContact={ this.editContact }
              removeContact={ this.removeContact }
            />
          ) : <h3>Lista de contatos vazia!</h3> }
        </div>
        { viewForm ? (
          <Form type="new" newContact={ this.newContact } />
        ) : '' }
      </div>
    );
  }
}

export default App;
