import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTasks } from 'redux/selectors';
import { createContactsThunk } from '../../thunk/thunk';

import styles from './ContactForm.module.css';
import stylesApp from '../../components/App.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(getTasks);

  const handleSubmit = e => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const phone = e.target.elements.number.value;
    const normoliseName = name.toLowerCase();
    const contactFind = items.find(
      contact => contact.name.toLowerCase() === normoliseName
    );

    if (contactFind) {
      alert(
        `${contactFind.name} is alredy contact with phone ${contactFind.phone}`
      );
      return;
    }
    const contactFindPhone = items.find(contact => contact.phone === phone);
    if (contactFindPhone) {
      alert(
        `${contactFindPhone.name} is alredy contact with phone ${contactFindPhone.phone}`
      );
      return;
    }

    dispatch(createContactsThunk({ name, phone }));
    e.target.elements.name.value = '';
    e.target.elements.number.value = '';
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="name" className={stylesApp.label_input}>
        Name
        <input
          className={stylesApp.field}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label htmlFor="number" className={stylesApp.label_input}>
        Number
        <input
          className={stylesApp.field}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className={stylesApp.btn}>
        Add
      </button>
    </form>
  );
};

export default ContactForm;
