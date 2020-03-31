import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user/user.service";
import {SearchService} from "../../../services/search/search.service";
import {Team} from "../../../common/types/team/team";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-add-team-ont',
  templateUrl: './add-team-ont.component.html',
  styleUrls: ['./add-team-ont.component.css']
})
export class AddTeamOntComponent implements OnInit {
  hasCountry: string;
  hasColor: string;
  hasShape: string;
  hasPopulation: string;
  hasChampion: string;
  hasStyle: string;
  hasValue: string;

  displayResult: boolean = false;
  teams: Team[] = [];


  constructor(private userService: UserService,
              private toastrService: ToastrService) {
  }

  ngOnInit(): void {

  }

  click() {

    this.userService.getFavTeamOnt(this.hasCountry, this.hasColor,
      this.hasShape, this.hasPopulation,
      this.hasChampion, this.hasStyle,
      this.hasValue).subscribe(
      data => {
        this.teams = data;
      }
    )
    this.displayResult = true;
  }

  addTeam(idTeam: string) {
    this.userService.addFavTeam(idTeam).subscribe(
      data => {
        this.toastrService.success("Team has been added to favourite", "Success!");
      },
      error => {
        this.toastrService.warning("You have added this team earlier", "Warning!");
      }
    );
  }

  clearSortingFilters() {
    this.hasCountry = null
    this.hasColor = null
    this.hasShape = null
    this.hasPopulation = null
    this.hasChampion = null
    this.hasStyle = null
    this.hasValue = null
  }

  invalidDataEntered() {
    this.toastrService.warning("Invalid data has been entered", "Warning!");
  }
}
