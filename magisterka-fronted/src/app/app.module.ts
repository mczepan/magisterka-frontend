import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BasketballResultComponent} from './components/live/basketball/general/basketball-result/basketball-result.component';
import {HttpClientModule} from '@angular/common/http';
import {BaskteballService} from './services/live/basketball/baskteball.service';
import {BasketballNavbarComponent} from './components/live/basketball/navbar/basketball-navbar.component';
import {RouterModule, Routes} from '@angular/router';
import {SportTypesComponent} from './components/types/sport-types/sport-types.component';
import {FormsModule} from '@angular/forms';
import {PlayerComponent} from './components/search/player/player.component';
import {TeamComponent} from './components/search/team/team.component';
import {SearchComponent} from './components/search/search.component';
import {TeamListComponent} from './components/search/team-list/team-list.component';
import {PlayerListComponent} from './components/search/player-list/player-list.component';
import {DetailBasketballComponent} from './components/live/basketball/detail/detail-basketball/detail-basketball.component';
import {BasketballTableComponent} from './components/table/basketball/basketball-table/basketball-table.component';
import {BasketballTeamsComponent} from './components/table/basketball/basketball-teams/basketball-teams.component';
import {FootballResultComponent} from './components/live/football/general/football-result/football-result.component';
import {FootballDetailComponent} from './components/live/football/detail/football-detail/football-detail.component';
import {FootballNavbarComponent} from "./components/live/football/navbar/football-navbar/football-navbar.component";
import {CountryComponent} from './components/table/football/country/country.component';
import {FootballTableComponent} from "./components/table/football/football-table/football-table.component";

const routes: Routes = [
  {path: 'teams/basketball', component: BasketballTeamsComponent},
  {path: 'table/basketball', component: BasketballTableComponent},
  {path: 'table/football/:id/:keyword', component: FootballTableComponent},
  {path: 'leagues/Soccer/country/:country', component: CountryComponent},
  {path: 'search/teams/:keyword', component: TeamListComponent},
  {path: 'search/team/:id', component: TeamComponent},
  {path: 'search/players/:keyword', component: PlayerListComponent},
  {path: 'search/player/:id', component: PlayerComponent},
  {path: 'type/:sport', component: SportTypesComponent},
  {path: 'live/basketball/:date/:game-id', component: DetailBasketballComponent},
  {path: 'live/soccer/details/:id', component: FootballDetailComponent},
  {path: 'live/Soccer', component: FootballResultComponent},
  {path: 'live/:sport', component: BasketballResultComponent},
  {path: 'live', component: BasketballResultComponent},
  {path: '', redirectTo: 'live', pathMatch: 'full'},
  {path: '**', redirectTo: 'live', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    BasketballResultComponent,
    BasketballNavbarComponent,
    SportTypesComponent,
    PlayerComponent,
    TeamComponent,
    SearchComponent,
    TeamListComponent,
    PlayerListComponent,
    DetailBasketballComponent,
    BasketballTableComponent,
    BasketballTeamsComponent,
    FootballResultComponent,
    FootballDetailComponent,
    FootballNavbarComponent,
    CountryComponent,
    FootballTableComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BaskteballService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
