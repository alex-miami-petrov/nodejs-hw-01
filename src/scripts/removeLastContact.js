import path from 'path';
import * as fs from 'fs/promises';

export const PATH_DB = path.resolve('src', 'db', 'db.json');

export const removeLastContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    if (contacts.length > 0) {
      contacts.pop();
      const updatedData = JSON.stringify(contacts, null, 2);
      await fs.writeFile(PATH_DB, updatedData, 'utf-8');
      console.log('Останній контакт був успішно видалений.');
    } else {
      console.log('Array is empty');
    }
  } catch (error) {
    console.error("Couldn't delete last contact");
    throw new Error('Не вдалося видалити останній контакт');
  }
};

removeLastContact();
