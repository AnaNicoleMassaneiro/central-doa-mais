import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'cpf'];
  dataSource = new MatTableDataSource<any>();

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      this.dataSource.data = users;
    });
  }
}
