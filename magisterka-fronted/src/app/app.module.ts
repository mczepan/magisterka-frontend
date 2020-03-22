import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BasketballResultComponent} from './components/live/basketball/general/basketball-result/basketball-result.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
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
import {LoginComponent} from "./components/login/login.component";
import { LogoutComponent } from './components/login/logout/logout.component';
import {AuthGaurdService} from "./services/gaurd/auth-gaurd.service";
import {InterceptorService} from "./services/interceptor/interceptor.service";


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGaurdService]},
  {path: 'teams/basketball', component: BasketballTeamsComponent, canActivate:[AuthGaurdService] },
  {path: 'table/basketball', component: BasketballTableComponent, canActivate:[AuthGaurdService] },
  {path: 'table/football/:id/:keyword', component: FootballTableComponent, canActivate:[AuthGaurdService] },
  {path: 'leagues/Soccer/country/:country', component: CountryComponent, canActivate:[AuthGaurdService] },
  {path: 'search/teams/:keyword', component: TeamListComponent, canActivate:[AuthGaurdService] },
  {path: 'search/team/:id', component: TeamComponent, canActivate:[AuthGaurdService] },
  {path: 'search/players/:keyword', component: PlayerListComponent, canActivate:[AuthGaurdService] },
  {path: 'search/player/:id', component: PlayerComponent, canActivate:[AuthGaurdService] },
  {path: 'type/:sport', component: SportTypesComponent, canActivate:[AuthGaurdService] },
  {path: 'live/basketball/:date/:game-id', component: DetailBasketballComponent, canActivate:[AuthGaurdService] },
  {path: 'live/soccer/details/:id', component: FootballDetailComponent, canActivate:[AuthGaurdService] },
  {path: 'live/Soccer', component: FootballResultComponent, canActivate:[AuthGaurdService] },
  {path: 'live/:sport', component: BasketballResultComponent, canActivate:[AuthGaurdService] },
  {path: 'live', component: BasketballResultComponent, canActivate:[AuthGaurdService] },
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
    FootballTableComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BaskteballService,{
    provide:HTTP_INTERCEPTORS, useClass: InterceptorService, multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
