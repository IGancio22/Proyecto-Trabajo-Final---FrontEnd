import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { LoginArray } from '../interfaceArrays';
import { ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  @ViewChild('closeLoginModalButton') closeLoginModalButton: ElementRef;
  @ViewChild('closeLogoutModalButton') closeLogoutModalButton: ElementRef;

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
      let inputElement:HTMLElement = this.closeLoginModalButton.nativeElement as HTMLElement;
      inputElement.click();
      alert("Se ha autentificado correctamente")

    } else {
      this.invalidLogin = true;
      alert("El usuario o contraseña que ha ingresado no existe")
    }
  }

  logout() {
    this.loginService.logOut()
    let inputElement:HTMLElement = this.closeLogoutModalButton.nativeElement as HTMLElement;
      inputElement.click();
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
