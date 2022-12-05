import React from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import Form from './Form/Form';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';

class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = data => {
    const searchSameName = this.state.contacts
      .map(contact => contact.name)
      .includes(data.name);

    if (searchSameName) {
      Notify.failure(`${data.name} is already in contacts`);
    } else {
      const contact = {
        ...data,
        id: nanoid(),
      };

      this.setState(prevState => ({
        contacts: [...prevState.contacts, contact],
      }));
    }
  };

  changeFilter = filter => {
    this.setState({ filter });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contacts =>
      contacts.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  removeContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  render() {
    const visibleContacts = this.getVisibleContacts();

    return (
      <>
        <h1>Phonebook</h1>
        <Form onAddContact={this.addContact} />
        <h2>Contacts</h2>
        {visibleContacts.length > 1 && (
          <Filter
            value={this.state.filter}
            onChangeFilter={this.changeFilter}
          />
        )}
        {visibleContacts.length > 0 && (
          <Contacts
            contacts={visibleContacts}
            onRemoveContact={this.removeContact}
          />
        )}
      </>
    );
  }
}

export default App;
