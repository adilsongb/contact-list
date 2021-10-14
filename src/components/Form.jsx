import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  constructor(props) {
    super(props);
    const { contact } = this.props;
    this.state = {
      name: contact.name || '',
      email: contact.email || '',
      tel: contact.tel || '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  updateContact(event, index) {
    event.preventDefault();
    const { editContact, closeForm } = this.props;
    editContact(this.state, index);
    closeForm();
  }

  saveContact(event) {
    event.preventDefault();
    const { newContact } = this.props;
    newContact(this.state);
  }

  renderTypeButton() {
    const { type, index } = this.props;
    if (type === 'new') {
      return (
        <button
          className="btn btn-save"
          onClick={(event) => this.saveContact(event)}
        >
          Salvar
        </button>
      );
    }

    return (
      <button
        className="btn btn-save"
        onClick={(event) => this.updateContact(event, index)}
      >
        Salvar
      </button>
    );
  }

  render() {
    const { name, email, tel } = this.state;
    return (
      <div className="container-form">
        <form>
          <label htmlFor="name-input">Nome</label>
          <input
            type="text"
            id="name-input"
            name="name"
            value={name}
            onChange={this.handleChange}
          />

          <label htmlFor="email-input">Email</label>
          <input
            type="email"
            id="email-input"
            name="email"
            value={email}
            onChange={this.handleChange}
          />

          <label htmlFor="tel-input">Número de Telefone</label>
          <input
            type="text"
            id="tel-input"
            name="tel"
            value={tel}
            onChange={this.handleChange}
          />

          { this.renderTypeButton() }
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  type: PropTypes.string.isRequired,
  contact: PropTypes.object,
  newContact: PropTypes.func,
  editContact: PropTypes.func,
  index: PropTypes.number,
  closeForm: PropTypes.func,
};

Form.defaultProps = {
  contact: {},
  editContact: undefined,
  closeForm: undefined,
  index: 0,
};

export default Form;
