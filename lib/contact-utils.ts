export type Contact = {
  name: string;
  email: string;
  text: string;
};

export const sendContacts = async (message: Contact) => {
  const response = await fetch('/api/contact-form', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong...');
  }
};