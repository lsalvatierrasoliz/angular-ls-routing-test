import { InMemoryDbService } from 'angular-in-memory-web-api';
import { UserData } from './users/user-data';
import { User } from './users/user';

export class AppData implements InMemoryDbService {
  createDb(): { users: User[] } {
    const users = UserData.users;
    return { users };
  }
}
