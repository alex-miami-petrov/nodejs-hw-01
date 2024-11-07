import path from 'path';
import * as fs from 'fs/promises';

export const PATH_DB = path.resolve('src', 'db', 'db.json');

export const removeAllContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    if (contacts.length > 0) {
      await fs.writeFile(PATH_DB, JSON.stringify([]));
    } else {
      console.log('File is empty');
    }
  } catch (error) {
    console.error("Couldn't remove contacts", error);
    throw new Error('Не вдалося видалити контакти');
  }
};

removeAllContacts()
  .then(() => {
    console.log('Remove completed');
  })
  .catch((error) => {
    console.error(error);
  });
