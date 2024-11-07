import path from 'path';
import * as fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const PATH_DB = path.resolve('src', 'db', 'db.json');

const generateContacts = async (number) => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);

    const newContacts = Array.from({ length: number }, createFakeContact);

    const updatedContacts = [...contacts, ...newContacts];

    const updatedData = JSON.stringify(updatedContacts, null, 2);
    await fs.writeFile(PATH_DB, updatedData, 'utf-8');

    console.log(`Додано ${number} нових контактів.`);
  } catch (error) {
    console.error('Помилка при генеруванні контактів:', error);
    throw new Error('Не вдалося згенерувати контакти');
  }
};

generateContacts(5);
