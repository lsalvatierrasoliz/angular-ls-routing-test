import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-users',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  pageTitle = 'User List';

  users$ = this.userService.usersInDetail$;

  constructor(private userService: UserService) {}

  ngOnInit() {}
}
