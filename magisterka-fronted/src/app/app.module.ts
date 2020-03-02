import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BasketballResultComponent} from "./components/live/basketball/general/basketball-result/basketball-result.component";
import {HttpClientModule} from "@angular/common/http";
import {BaskteballService} from "./services/live/basketball/baskteball.service";
import { NavbarComponent } from './components/live/basketball/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    BasketballResultComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [BaskteballService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
