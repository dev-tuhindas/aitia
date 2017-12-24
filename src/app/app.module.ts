import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import { Material } from './externals/material';
import { TopnavComponent } from './components/navigation/topnav/topnav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DimensionalComponent } from './components/widgets/dimensional/dimensional.component';


const appRoutes: Routes = [
     { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
     { path: 'dashboard',component: DashboardComponent },
     { path: 'nav', component: TopnavComponent }
       ];


@NgModule({
  declarations: [
  AppComponent,
  TopnavComponent,
  DashboardComponent,
  DimensionalComponent
  ],
  imports: [
  BrowserModule,
  BrowserAnimationsModule,
  NoopAnimationsModule,
  FormsModule,
  Material,
  RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
