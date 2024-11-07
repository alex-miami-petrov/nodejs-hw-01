import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import * as fs from 'fs/promises';

const generateContacts = async (number) => {
  try {
    await fs.access(PATH_DB);

    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);

    const newContacts = Array.from({ length: number }, createFakeContact);

    const updatedContacts = [...contacts, ...newContacts];

    const updatedData = JSON.stringify(updatedContacts, null, 2);
    await fs.writeFile(PATH_DB, updatedData, 'utf-8');
  } catch (error) {
    console.error('Fail to generate contacts', error);
    throw new Error('Не вдалося згенерувати контакти');
  }
};

generateContacts(5);
