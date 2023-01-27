import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {GameListComponent} from './components/game-list/game-list.component';
import { GameFormComponent }from './components/game-form/game-form.component';
import { HomeComponent} from './component/home/home.component';
import { ContactosComponent } from './component/contactos/contactos.component';
import { ProductosComponent } from './component/productos/productos.component';
import { NosotrosComponent } from './component/nosotros/nosotros.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'games',
    component: GameListComponent
  },
  {
    path: 'games/add',
    component: GameFormComponent
  },
  {
    path: 'games/edit/:id',
    component: GameFormComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'contactos',
    component: ContactosComponent
  },
  {
    path: 'productos',
    component: ProductosComponent
  },
  {
    path: 'nosotros',
    component: NosotrosComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
