import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { MuestraComponent } from './muestra/muestra.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//componentes globales
import { SharedModule } from './modules/shared/shared.module';

//vinculaciones con firebase
import { environment } from 'src/environments/environment';
import { AngularFireModule} from '@angular/fire/compat';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import {AngularFireStorageModule} from '@angular/fire/compat/storage'



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    MuestraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //componentes globales
    SharedModule,
    //inicializa firebase en nuestro proyecto
    AngularFireModule.initializeApp(environment.firebaseConfig),
    //autentificacion
    AngularFireAuthModule,
    //storage -> bd de imagenes
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
