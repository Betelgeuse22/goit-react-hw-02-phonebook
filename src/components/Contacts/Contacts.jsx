import React from 'react';

const Contacts = ({ contacts, onRemoveContact }) => (
  <ul>
    {contacts.map(contact => (
      <li key={contact.id}>
        {contact.name + ' : ' + contact.number}
        {
          <button type="button" onClick={() => onRemoveContact(contact.id)}>
            Delete
          </button>
        }
      </li>
    ))}
  </ul>
);

export default Contacts;
