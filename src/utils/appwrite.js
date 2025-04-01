import { Client, Account, Databases, Storage } from 'appwrite';

const client = new Client();
client
  .setEndpoint('https://appwrite.example.com/v1')
  .setProject('67ebfcd9001ca641494f');

const account = new Account(client);
const databases = new Databases(client);
const storage = new Storage(client);

export { client, account, databases, storage };
