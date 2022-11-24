import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/IUser';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(public userService: UsersService) {}

  users: IUser[] = [];

  ngOnInit(): void {
  }
  showUsers(): void {
    this.userService.getUsers()
    .subscribe((data: IUser[]) => this.users = data);
  }
}
