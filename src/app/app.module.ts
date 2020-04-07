import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { AComponent } from './a/a.component';
import { BComponent } from './A/b/b.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    AComponent,
    BComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
