import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css'],
})
export class PasswordStrengthComponent {
  password: string = '';
  passwordStrengthClass: string[] = ['gray', 'gray', 'gray'];

  constructor(private router: Router, private userService: UserService) {} 

  checkPasswordStrength() {
    if (this.password.length === 0) {
      this.passwordStrengthClass = ['gray', 'gray', 'gray'];
    } else if (this.password.length < 8) {
      this.passwordStrengthClass = ['red', 'red', 'red'];
    } else {
      let hasLetters = /[a-zA-Z]/.test(this.password);
      let hasNumbers = /[0-9]/.test(this.password);
      let hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(this.password);

      if (
        (hasLetters && !hasNumbers && !hasSymbols) ||
        (!hasLetters && hasNumbers && !hasSymbols) ||
        (!hasLetters && !hasNumbers && hasSymbols)
      ) {
        this.passwordStrengthClass = ['red', 'gray', 'gray'];
      } else if (
        (hasLetters && hasNumbers && !hasSymbols) ||
        (hasLetters && !hasNumbers && hasSymbols) ||
        (!hasLetters && hasNumbers && hasSymbols)
      ) {
        this.passwordStrengthClass = ['yellow', 'yellow', 'gray'];
      } else if (hasLetters && hasNumbers && hasSymbols) {
        this.passwordStrengthClass = ['green', 'green', 'green'];
      }
    }
  }

  onSubmit() {
    this.checkPasswordStrength();
    if (
      this.passwordStrengthClass.includes('yellow') ||
      this.passwordStrengthClass.includes('green')
    ) {
      const user = { password: this.password };
      this.userService.createUser(user).subscribe(
        (response) => {
          console.log('User created successfully:', response);
          this.router.navigate(['/success']);
        },
        (error) => {
          console.error('There was an error!', error);
        }
      );
    }
  }
}
