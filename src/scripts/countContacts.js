import path from 'path';
import * as fs from 'fs/promises';

export const PATH_DB = path.resolve('src', 'db', 'db.json');

export const countContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);

    return contacts.length;
  } catch (error) {
    console.error('Couldn`t count contacts', error);
    throw new Error('Не вдалось порахувати контакти');
  }
};

countContacts()
  .then((count) => {
    console.log(`Кількість контактів: ${count}`);
  })
  .catch((error) => {
    console.error(error);
  });
