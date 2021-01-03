import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmacionEliminarComponent } from '../Mensajes/confirmacion-eliminar/confirmacion-eliminar.component';
import { Contacto } from '../models/contacto';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.scss']
})
export class ListaContactosComponent implements OnInit {
  contactos: Contacto[] = [];
  durationInSeconds = 5;
  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.contactos = this.consultarContactos();
  }
  consultarContactos(): Contacto[] {
    return JSON.parse(localStorage.getItem('contactos'));
  }

  EliminarContacto(contacto: Contacto) {
    if (this.consultarContactos() != null) {
      var index = this.consultarContactos().findIndex(c => c.identificacion == contacto.identificacion);
      if (index != null) {
        this.contactos.splice(index, 1);
        localStorage.setItem('contactos', JSON.stringify(this.contactos));
        this._snackBar.openFromComponent(ConfirmacionEliminarComponent, {
          duration: this.durationInSeconds * 1000,
        });
      }
    }

  }
}
