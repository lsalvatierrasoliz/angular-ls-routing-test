import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { UserFlatData } from './users/user-flat-data';
import { UserData } from './users/user-data';
import { User } from './users/user';

export class AppData implements InMemoryDbService {
  createDb(): { users: User[]; usersDetails: User[] } {
    const users = UserFlatData.users;
    const usersDetails = UserData.users;
    return { users, usersDetails };
  }
}
