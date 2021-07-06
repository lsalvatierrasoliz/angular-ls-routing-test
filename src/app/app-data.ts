import { InMemoryDbService } from 'angular-in-memory-web-api';
import { UserData } from './users/user-data';
import { UserFlatData } from './users/user-flat-data';
import { User } from './users/user';

export class AppData implements InMemoryDbService {
  createDb(): { users: User[]; flatUsers: User[] } {
    const users = UserData.users;
    const flatUsers = UserFlatData.users;
    return { users, flatUsers };
  }
}
