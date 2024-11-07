import path from 'path';
import * as fs from 'fs/promises';

export const PATH_DB = path.resolve('src', 'db', 'db.json');

export const getAllContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);

    return contacts;
  } catch (error) {
    console.error('Помилка при читанні контакту з файлу:', error);
    throw new Error('Не вдалося отримати контакти');
  }
};

console.log(await getAllContacts());
