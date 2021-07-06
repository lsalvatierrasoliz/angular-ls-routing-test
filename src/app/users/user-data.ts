import { User } from './user';

export class UserData {
  static users: User[] = [
    {
      id: 1,
      firstName: 'Pepe',
      lastName: 'Aguilar',
      middleName: 'Poncio',
      username: 'paguilar@gmail.com'
    },
    {
      id: 2,
      firstName: 'Coko',
      lastName: 'Chavez',
      middleName: 'Lizo',
      username: 'cchagex@gmail.com'
    },
    {
      id: 3,
      firstName: 'Yepeto',
      lastName: 'Ruinas',
      username: 'yruinas@gmail.com'
    }
  ];
}
