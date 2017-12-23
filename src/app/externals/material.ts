/*

Name : material.ts
Author : Tuhin Das
Initial Branch : 0.0.1
Created On : 12/23/17

Description
-----------
This class should be use to export any material module into the app.

**Note : Dont include unused modules.
*/

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import 
{
}  from '@angular/material';


@NgModule({
exports:
        [
	],
	imports: [
	  BrowserModule,
	  BrowserAnimationsModule,
          FormsModule,
	  ReactiveFormsModule
				      ],
	  })

export class Material {} 
