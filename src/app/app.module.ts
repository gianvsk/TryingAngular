import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProvaPipe } from './prova.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ProvaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
