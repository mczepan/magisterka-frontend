import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../../services/authentication/authentication.service";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username = ''
  password = ''
  email =''
  constructor(private loginService: AuthenticationService,
              private router: Router,
              private toastrService: ToastrService) { }

  ngOnInit(): void {
  }

  register(form: NgForm) {
    if (this.username === '' || this.password === '') {
      this.toastrService.warning("Please fill all fields", "Warning!");
    } else {
      (this.loginService.register(this.username, this.password, this.email).subscribe(
        data => {
          form.reset();
          this.toastrService.success("User has been created", "Success!");
          this.router.navigate(['login'])
        },
        error => {
          this.toastrService.error("Provided username or email exist/incorrect", "Error!");
        }
      ));
    }
  }
}
