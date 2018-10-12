import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpService } from './http.service'; // provided path to your service file
import { HttpClientModule } from '@angular/common/http'; // provided HttpClientModule to enable http requests

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
      BrowserModule,
      HttpClientModule // added this line in order to fetch data from our database using http requests
  ],
  providers: [ HttpService ], // added [HttpService] to providers key
  bootstrap: [AppComponent]
})
export class AppModule { }
