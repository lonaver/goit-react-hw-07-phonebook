const BASE_URL = new URL(
  'https://646f696f09ff19b120873661.mockapi.io/contacts'
);

export const fetchContacts = async () => {
  const data = await fetch(BASE_URL, {
    method: 'GET',
    headers: { 'content-type': 'application/json' },
  });
  return await data.json();
};

export const addContact = async data => {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(data),
  });
  return await res.json();
};

export const deleteContact = async id => {
  const res = await fetch(BASE_URL + `/${id}`, {
    method: 'DELETE',
  });
  return await res.json();
};
