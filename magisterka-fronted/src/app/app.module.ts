import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BasketballResultComponent} from "./components/live/basketball/general/basketball-result/basketball-result.component";
import {HttpClientModule} from "@angular/common/http";
import {BaskteballService} from "./services/live/basketball/baskteball.service";
import {BasketballNavbarComponent} from './components/live/basketball/navbar/basketball-navbar.component';
import {RouterModule, Routes} from "@angular/router";
import { SportTypesComponent } from './components/types/sport-types/sport-types.component';

const routes: Routes = [
  {path: 'type/:sport', component: SportTypesComponent},
  {path: 'live', component: BasketballResultComponent},
  {path: '', redirectTo: 'live', pathMatch: 'full'},
  {path: '**', redirectTo: 'live', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    BasketballResultComponent,
    BasketballNavbarComponent,
    SportTypesComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule
  ],
  providers: [BaskteballService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
