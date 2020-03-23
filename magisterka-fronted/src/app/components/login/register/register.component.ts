import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../../services/authentication/authentication.service";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username = ''
  password = ''
  email =''
  constructor(private loginservice: AuthenticationService,
              private router: Router) { }

  ngOnInit(): void {
  }

  register(form: NgForm) {
    console.log(`TEST: ${this.username} ${this.password} ${this.email}`);
    (this.loginservice.register(this.username, this.password,this.email).subscribe());
    form.reset();
    this.router.navigate(['login'])
  }
}
