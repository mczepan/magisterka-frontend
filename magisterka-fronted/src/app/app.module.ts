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

const routes: Routes = [
  {path: 'search/team/:keyword', component: TeamListComponent},
  {path: 'search/team', component: TeamListComponent},
  {path: 'search/player/:keyword', component: PlayerListComponent},
  {path: 'search/player', component: PlayerListComponent},
  {path: 'type/:sport', component: SportTypesComponent},
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
    PlayerListComponent
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
