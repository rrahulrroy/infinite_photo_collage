import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http'; //importing the HttpClientModule

import { AppComponent } from './app.component';
import { ImageCollageComponent } from './image-collage/image-collage.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageCollageComponent
  ],
  imports: [
    BrowserModule,
    // other imports...
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
