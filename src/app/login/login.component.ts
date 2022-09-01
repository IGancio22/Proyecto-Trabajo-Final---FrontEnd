import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { LoginArray } from '../interfaceArrays';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  username = 'letmein';
  password = '';
  invalidLogin = false;
  session = false;

  constructor(public loginService: AuthenticationService) { }

  ngOnInit(): void {  }

  checkLogin(login: LoginArray) {
    if (this.loginService.authenticate(login.username, login.password)) {
      this.invalidLogin = false;
      this.session = true;
    } else {
      this.invalidLogin = true;
    }
  }

  public onOpenModal(mode: string): void{
    const container = document.getElementById('logincontainer');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    if (mode == 'login') {
      button.setAttribute('data-bs-target', '#loginModal')
    }
    if (mode == 'logout') {
      button.setAttribute('data-bs-target', '#logoutModal')
    }
    container?.appendChild(button);
    button.click();
  }

}
