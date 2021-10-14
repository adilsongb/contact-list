import React from 'react';
import Form from './Form';
import PropTypes from 'prop-types';

class TableContacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewFormEdit: false,
      contactIndex: 0,
    };
  }

  viewEditForm(index) {
    this.setState({ viewFormEdit: true, contactIndex: index });
  }

  closeForm() {
    this.setState({ viewFormEdit: false });
  }

  render() {
    const { contacts, editContact, removeContact } = this.props;
    const { viewFormEdit, contactIndex } = this.state;
    return (
      <>
        <table border="1">
          <thead>
            <tr>
              <th className="name">Nome</th>
              <th className="email">Email</th>
              <th className="tel">Número de telefone</th>
              <th className="options">Opções</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map(({ name, email, tel }, i) => (
              <tr key={i}>
                <td>{name}</td>
                <td>{email}</td>
                <td>{tel}</td>
                <td>
                  <button
                    className="btn btn-edit"
                    onClick={() => this.viewEditForm(i)}
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-remove"
                    onClick={() => removeContact(i)}
                  >
                    Remover
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {viewFormEdit ? (
          <Form
            type="edit"
            editContact={editContact}
            index={contactIndex}
            contact={contacts[contactIndex]}
            closeForm={() => this.closeForm()}
          />
        ) : ''}
      </>
    );
  }
}

TableContacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  editContact: PropTypes.func.isRequired,
  removeContact: PropTypes.func.isRequired,
};

export default TableContacts;
