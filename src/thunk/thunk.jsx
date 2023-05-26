import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from '../ContactsAPI';

export const getContactsThunk = createAsyncThunk('contacts/fetchAll', () =>
  fetchContacts()
);
export const createContactsThunk = createAsyncThunk(
  'contacts/addContact',
  data => addContact(data)
);
export const deleteContactsThunk = createAsyncThunk(
  'contacts/deleteContact',
  id => deleteContact(id)
);
