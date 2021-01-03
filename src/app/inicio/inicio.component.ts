import { Component, OnInit } from '@angular/core';
import { Contacto } from '../models/contacto';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  totalContactos=0;
  totalCumples=0;
  fechaActual: Date;
  constructor() { }

  ngOnInit(): void {
    this.totalContactos = this.consultarContactos().length;
    
    this.contarCumplesHoy();
  }
  consultarContactos(): Contacto[] {
    return JSON.parse(localStorage.getItem('contactos'));
  }

  contarCumplesHoy(){
    this.fechaActual = new Date();
    var mesHoy = this.fechaActual.getMonth();
    var diaHoy = this.fechaActual.getDate();
    let cumplesHoy:Contacto[] = this.consultarContactos().filter(c => this.fechasIguales(this.fechaActual,c.fechaCumple));
    this.totalCumples = cumplesHoy.length;
  }

  fechasIguales(fechaActual:Date, fechaCumple:Date):boolean{
  
      var fechaCumpleano = new Date();

      var fechaCumpleP =  Date.parse(fechaCumple.toString());
  
      fechaCumpleano.setTime(fechaCumpleP);

      var mesHoy= fechaActual.getMonth();
      var diaHoy = fechaActual.getDate();

      var diaCumple = fechaCumpleano.getDate() + 1;
      var mesCumple = fechaCumpleano.getMonth();

      if(mesHoy == mesCumple && diaHoy == diaCumple){
        return true;
      }
      return false;
  }
}
