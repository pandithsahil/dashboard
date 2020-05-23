import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WhatWentWellComponent } from './components/what-went-well/what-went-well.component';
import { WhatCanBeImprovedComponent } from './components/what-can-be-improved/what-can-be-improved.component';
import { StartDoingComponent } from './components/start-doing/start-doing.component';
import { ActionsComponent } from './components/actions/actions.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WhatWentWellComponent,
    WhatCanBeImprovedComponent,
    StartDoingComponent,
    ActionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  exports:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
