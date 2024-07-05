import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css'],
})
export class SuccessComponent implements OnInit {
  usersPasswords: any[] = [];
  errorMessage: string | null = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsersPasswords().subscribe(
      (data) => {
        this.usersPasswords = data;
        this.errorMessage = null;
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }
}
