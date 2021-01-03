import { Pipe, PipeTransform } from '@angular/core';
import { Contacto } from '../models/contacto';

@Pipe({
  name: 'filtroContactos'
})
export class FiltroContactosPipe implements PipeTransform {

  transform(contactos: Contacto[], textoBuscar: string): any {
    if (textoBuscar == null) {
      return contactos.sort(function (a, b) {
        if (a.nombre.toLowerCase() > b.nombre.toLowerCase()) {
          return 1;
        }
        if (a.nombre.toLowerCase() < b.nombre.toLowerCase()) {
          return -1;
        }
        return 0;
      });
    }
    return contactos.filter(c => (c.nombre.toLowerCase().indexOf(textoBuscar.toLowerCase()) !== -1) || (c.celular.indexOf(textoBuscar) !== -1));
  }

}
