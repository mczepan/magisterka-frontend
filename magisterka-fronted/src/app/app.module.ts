import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BasketballResultComponent} from "./components/live/basketball/general/basketball-result/basketball-result.component";
import {HttpClientModule} from "@angular/common/http";
import {BaskteballService} from "./services/live/basketball/baskteball.service";

@NgModule({
  declarations: [
    AppComponent,
    BasketballResultComponent
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
