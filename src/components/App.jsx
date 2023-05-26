import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getTasks } from 'redux/selectors';
import { getContactsThunk } from '../thunk/thunk';

import styles from './App.module.css';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const App = () => {
  const { items } = useSelector(getTasks);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <div className={styles.contacts}>
      <h1>Phone book</h1>
      <ContactForm></ContactForm>
      <h2>Contacts</h2>
      <Filter></Filter>
      {items.length > 0 && <ContactList></ContactList>}
    </div>
  );
};

export default App;
