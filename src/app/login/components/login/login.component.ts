import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../services/login.service";
import {Login} from "../../models/login";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  dadosLogin = new Login();

  constructor(private loginService: LoginService,
              private router: Router) { }

  ngOnInit(): void {
  }

  logar(dadosLogin: Login){
    this.loginService.logar(dadosLogin)
      .subscribe((response: any) => {
        if (response.token) {
          localStorage.setItem('token', response.token);
          this.router.navigateByUrl('usuarios')
        } else {
          localStorage.removeItem('token');
        }
      }, () => localStorage.removeItem('token'));
  }

  log(value: string) {
    console.log(value);
  }
}
