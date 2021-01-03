import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmacionDeregistroComponent } from '../Mensajes/confirmacion-deregistro/confirmacion-deregistro.component';
import { ContactoExistenteComponent } from '../Mensajes/contacto-existente/contacto-existente.component';
import { Contacto } from '../models/contacto';
import { Location } from '@angular/common';
@Component({
  selector: 'app-agregar-contacto',
  templateUrl: './agregar-contacto.component.html',
  styleUrls: ['./agregar-contacto.component.scss']
})
export class AgregarContactoComponent implements OnInit {
  formGroup: FormGroup;
  contacto: Contacto;
  durationInSeconds = 5;
  constructor(private location: Location, private formBuilder: FormBuilder, public dialog: MatDialog,private _snackBar: MatSnackBar) { }


  ngOnInit(): void {
    this.contruirFormulario();
  }

  private contruirFormulario() {
    this.contacto = new Contacto();
    this.contacto.identificacion = "";
    this.contacto.nombre = "";
    this.contacto.direccion = "";
    this.contacto.celular = "";
    this.contacto.fechaCumple = null;
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

  volver(){
    this.location.back();
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


  guardarContacto() {
    this.contacto = this.formGroup.value;
    let contactos: Contacto[] = [];
    
    if (this.consultarContactos() != null) {
      contactos = this.consultarContactos();
    }

    if (this.numeroCelularRegistrado(contactos)) {
      this.dialog.open(ContactoExistenteComponent);
      return;
    }

    contactos.push(this.contacto);
    localStorage.setItem('contactos', JSON.stringify(contactos));
    this._snackBar.openFromComponent(ConfirmacionDeregistroComponent, {
      duration: this.durationInSeconds * 1000,
    });
    this.formGroup.reset();
    this.location.back();
  }

  private numeroCelularRegistrado(contactos: Contacto[]): boolean {
    var existe = false;
    if (contactos != null) {
      contactos.forEach(element => {
        if (element.celular == this.contacto.celular) {
          existe = true;
        }
      });
    }

    return existe;
  }
}
