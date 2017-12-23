import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { Material } from './externals/material';

@NgModule({
  declarations: [
  AppComponent
  ],
  imports: [
  BrowserModule,
  BrowserAnimationsModule,
  NoopAnimationsModule,
  FormsModule,
  Material
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
