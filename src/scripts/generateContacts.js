import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const generateContacts = async (number) => {
  const contactsList = await readContacts();
  const newContacts = Array(number)
    .fill()
    .map(() => createFakeContact());
  await writeContacts([...contactsList, ...newContacts]);
};

generateContacts(5);
