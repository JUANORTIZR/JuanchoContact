import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Contacto } from '../models/contacto';
import { Location } from '@angular/common';
import { ConfirmacionActualizacionComponent } from '../Mensajes/confirmacion-actualizacion/confirmacion-actualizacion.component';
@Component({
  selector: 'app-actualizar-contacto',
  templateUrl: './actualizar-contacto.component.html',
  styleUrls: ['./actualizar-contacto.component.scss']
})
export class ActualizarContactoComponent implements OnInit {
  contacto: Contacto;
  formGroup: FormGroup;
  durationInSeconds = 5;
  celular = this.rutaActiva.snapshot.params.celular;
  constructor(private location: Location, private rutaActiva: ActivatedRoute, private formBuilder: FormBuilder, public dialog: MatDialog, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    let contactoEncontrado: Contacto = this.consultarContactos().find(c => c.celular == this.celular);
    this.contruirFormulario(contactoEncontrado);
  }

  private contruirFormulario(contacto: Contacto) {
    this.contacto = contacto;
    this.formGroup = this.formBuilder.group({
      identificacion: [this.contacto.identificacion, Validators.required],
      nombre: [this.contacto.nombre, Validators.required],
      direccion: [this.contacto.direccion, Validators.required],
      celular: [this.contacto.celular, Validators.required],
      fechaCumple: [this.contacto.fechaCumple, Validators.required]
    })
  }

  get control() {
    return this.formGroup.controls;
  }

  enviar() {
    if (this.formGroup.invalid) {
      return;
    }
    this.guardarContacto();
  }

  consultarContactos(): Contacto[] {
    return JSON.parse(localStorage.getItem('contactos'));
  }

  volver() {
    this.location.back();
  }


  guardarContacto() {
    this.contacto = this.formGroup.value;
    let contactos: Contacto[] = [];

    if (this.consultarContactos() != null) {
      contactos = this.consultarContactos();
    }

    let index = contactos.findIndex(c => c.celular == this.celular);
    contactos.splice(index, 1, this.contacto);

    localStorage.setItem('contactos', JSON.stringify(contactos));
    this._snackBar.openFromComponent(ConfirmacionActualizacionComponent, {
      duration: this.durationInSeconds * 1000,
    });
    this.formGroup.reset();
    this.location.back();
  }


}
