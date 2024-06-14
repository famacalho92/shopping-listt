import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  { 
    path: 'lista-compras', 
    loadChildren: () => import('./pages/lista-compras/lista-compras.module').then(m => m.ListaComprasPageModule) 
  },
  { 
    path: 'lista-detalle/:id', 
    loadChildren: () => import('./pages/lista-detalle/lista-detalle.module').then(m => m.ListaDetallePageModule) 
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
