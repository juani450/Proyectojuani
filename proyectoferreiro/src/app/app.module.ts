import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { MuestraComponent } from './muestra/muestra.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';








@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    MuestraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
