import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { initialState } from './initialStates';
import {
  getContactsThunk,
  createContactsThunk,
  deleteContactsThunk,
} from '../thunk/thunk';

//const tasksInitialState = [];

const handlePending = state => {
  state.contacts = { ...state.contacts, isLoading: true };
};

const handleFulfild = state => {
  state.contacts = { ...state.contacts, isLoading: false, error: null };
};
const handleFulfildGet = (state, { payload }) => {
  state.contacts = { ...state.contacts, items: payload };
};

const handleFulfildCreate = (state, { payload }) => {
  state.contacts = {
    ...state.contacts,
    items: [payload, ...state.contacts.items],
  };
};
const handleFulfildDelete = (state, { payload }) => {
  state.contacts = {
    ...state.contacts,
    items: state.contacts.items.filter(el => el.id !== payload.id),
  };
};

const handleRejected = (state, { payload }) => {
  state.contacts = {
    ...state.contacts,
    isLoading: false,
    error: payload,
  };
};

export const tasksSlice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.fulfilled, handleFulfildGet)
      .addCase(createContactsThunk.fulfilled, handleFulfildCreate)
      .addCase(deleteContactsThunk.fulfilled, handleFulfildDelete)
      .addMatcher(
        isAnyOf(
          getContactsThunk.pending,
          createContactsThunk.pending,
          deleteContactsThunk.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          getContactsThunk.rejected,
          createContactsThunk.rejected,
          deleteContactsThunk.rejected
        ),
        handleRejected
      )
      .addMatcher(
        isAnyOf(
          getContactsThunk.fulfilled,
          createContactsThunk.fulfilled,
          deleteContactsThunk.fulfilled
        ),
        handleFulfild
      );
  },
});

export const tasksReducer = tasksSlice.reducer;
