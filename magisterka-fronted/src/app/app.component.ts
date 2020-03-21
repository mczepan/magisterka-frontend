import {Component, OnInit} from "@angular/core";
import {SportTypes} from "./common/types/sport-types";
import {SportTypesService} from "./services/types/sport-types.service";
import {NgForm} from "@angular/forms";
import {AuthenticationService} from "./services/authentication/authentication.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ang-test';
  sportTypes: SportTypes[];
  isSubmitted = false;

  constructor(private sportTypesService: SportTypesService,
              public loginService: AuthenticationService ) {
  }

  ngOnInit(): void {
    this.sportTypesList();
  }

  sportTypesList() {
    this.sportTypesService.getSportTypesList().subscribe(
      data => {
        this.sportTypes = data;
      }
    )
  }

  submitForm(form: NgForm) {
    this.isSubmitted = true;
    if(!form.valid) {
      return false;
    } else {
      alert(JSON.stringify(form.value))
    }
  }

}
