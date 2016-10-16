import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from "./app.routing";
import { AppComponent } from './app.component';
import { ImagesComponent } from './images/images.component';
import { ImagesService } from "./images.service";

@NgModule({
  declarations: [
    AppComponent,
    ImagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ImagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
