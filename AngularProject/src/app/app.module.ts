import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MgkeysComponent } from './mgkeys/mgkeys.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MgkeysComponent
  ],
  imports: [
    BrowserModule
    MatTableModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
