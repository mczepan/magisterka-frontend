import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from "../../services/authentication/authentication.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ''
  password = ''
  invalidLogin = false

  constructor(private router: Router,
              private loginservice: AuthenticationService,
              private toastrService: ToastrService) {
  }

  ngOnInit() {
  }

  checkLogin() {
    if (this.username === '' || this.password === '') {
      this.toastrService.warning("Please fill all fields", "Warning!");
    } else {
      (this.loginservice.authenticate(this.username, this.password).subscribe(
          data => {
            this.router.navigate(['/home'])
            this.invalidLogin = false
            this.toastrService.success("You have been login", "Success!");
          },
          error => {
            this.invalidLogin = true
            this.toastrService.error("Invalid credentials", "Error!");
          }
        )
      );
    }
  }
}
