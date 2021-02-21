import { Component, OnInit } from '@angular/core';
import { BrowserModule } from  '@angular/platform-browser';
import { NgModule } from  '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { AppComponent } from  './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule       
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
@Component({
  selector: 'app-mgkeys',
  templateUrl: './mgkeys.component.html',
  styleUrls: ['./mgkeys.component.css']
})
export class MgkeysComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
