import { ServiceService } from 'src/app/service.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
  }

  onLogin(loginForm: NgForm) {
    console.log(loginForm.value);
    const user = this.service.authUser(loginForm.value);
    console.log(user);

  }
}
