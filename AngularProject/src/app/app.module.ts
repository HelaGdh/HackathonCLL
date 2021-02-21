import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NvbarComponent } from './nvbar/nvbar.component';

import { IgxNavbarModule } from 'igniteui-angular';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component'

/* Angular material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [...],
  imports: [
    BrowserAnimationsModule,
    AngularMaterialModule,
  ],
  providers: [...],
  bootstrap: [...],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }

@NgModule({
  ...
  imports: [..., IgxNavbarModule],
  ...,
  declarations: [LogInComponent, RegisterComponent]
})

@NgModule({
  declarations: [
    AppComponent,
    NvbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
