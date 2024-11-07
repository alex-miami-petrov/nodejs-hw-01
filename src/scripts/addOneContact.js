import path from 'path';
import * as fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const PATH_DB = path.resolve('src', 'db', 'db.json');

const addOneContact = async () => {
  try {
    let contacts = [];
    try {
      const data = await fs.readFile(PATH_DB, 'utf-8');
      contacts = JSON.parse(data);
    } catch (error) {
      console.log('Файл db.json не знайдений, створюємо новий...');
    }

    const newContact = createFakeContact();

    const updatedContacts = [...contacts, newContact];

    const updatedData = JSON.stringify(updatedContacts, null, 2);
    await fs.writeFile(PATH_DB, updatedData, 'utf-8');

    console.log('Новий контакт додано.');
  } catch (error) {
    console.error('Помилка при додаванні нового контакту:', error);
    throw new Error('Не вдалося додати новий контакт');
  }
};

addOneContact();
