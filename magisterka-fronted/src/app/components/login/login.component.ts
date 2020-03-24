import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
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
  theValueToken: string = ''

  constructor(private router: Router,
              private route: ActivatedRoute,
              private loginservice: AuthenticationService,
              private toastrService: ToastrService) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.theValueToken = params['value'];
    });

    if(this.theValueToken == null || this.theValueToken === '') {
    } else if(!(this.theValueToken === '')) {
      this.loginservice.verifyToken(this.theValueToken)
      this.toastrService.success("Your account has been activated, Please Login :)", "Success!");
    }
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
            this.toastrService.error("Invalid credentials or account is not activated", "Error!");
          }
        )
      );
    }
  }
}
