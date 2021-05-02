import { makeAutoObservable } from 'mobx';
import { nanoid } from 'nanoid';

interface User {
  [name: string]: string;
  surname: string;
  email: string;
  id: string;
}

export class UsersStore {
  users: User[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addUser(obj: User) {
    this.users.push({ ...obj, id: nanoid() });
  }

  findUser(id: string) {
    const singleUser = this.users.find((user) => user.id === id);

    if (singleUser) return singleUser;
  }

  editUser(obj: User, id: string) {
    return (this.users = this.users.map((user) => {
      const { name, surname, email } = obj;
      return user.id === id ? { ...user, name, surname, email } : user;
    }));
  }

  deleteUser(id: string) {
    const index = this.users.findIndex((user) => user.id === id);

    this.users.splice(index, 1);
  }

  sortUsers(value: string, counter: number) {
    const prop = value.toLowerCase();

    return this.users.sort((a, b) => {
      if (counter % 2 === 0) {
        return a[prop].toLowerCase().localeCompare(b[prop].toLowerCase());
      }
      return b[prop].toLowerCase().localeCompare(a[prop].toLowerCase());
    });
  }
}
