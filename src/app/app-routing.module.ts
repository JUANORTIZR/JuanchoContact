import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes,ActivatedRoute } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ListaContactosComponent } from './lista-contactos/lista-contactos.component';
import { AgregarContactoComponent } from './agregar-contacto/agregar-contacto.component';
import { ActualizarContactoComponent } from './actualizar-contacto/actualizar-contacto.component';


const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'listaContactos',
    component: ListaContactosComponent
  },
  {
    path: '',
    component: InicioComponent
  },
  {
    path: 'agregarContacto',
    component: AgregarContactoComponent
  },
  {
    path: 'actualizarContacto/:celular',
    component: ActualizarContactoComponent
  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
