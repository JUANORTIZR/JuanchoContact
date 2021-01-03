import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioComponent } from './inicio/inicio.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { ListaContactosComponent } from './lista-contactos/lista-contactos.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { AgregarContactoComponent } from './agregar-contacto/agregar-contacto.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { ConfirmacionDeregistroComponent } from './Mensajes/confirmacion-deregistro/confirmacion-deregistro.component';
import { ContactoExistenteComponent } from './Mensajes/contacto-existente/contacto-existente.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ConfirmacionEliminarComponent } from './Mensajes/confirmacion-eliminar/confirmacion-eliminar.component';
import { ActualizarContactoComponent } from './actualizar-contacto/actualizar-contacto.component';
import { ConfirmacionActualizacionComponent } from './Mensajes/confirmacion-actualizacion/confirmacion-actualizacion.component';
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ListaContactosComponent,
    NavBarComponent,
    AgregarContactoComponent,
    ConfirmacionDeregistroComponent,
    ContactoExistenteComponent,
    ConfirmacionEliminarComponent,
    ActualizarContactoComponent,
    ConfirmacionActualizacionComponent,
  ],
  imports: [
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    BrowserModule,
    MatButtonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
