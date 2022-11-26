import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './Components/inicio/inicio.component';
import { PortafolioComponent } from './Components/portafolio/portafolio.component';

const routes: Routes = [{
  path: '',
  component: InicioComponent
}, {
  path: 'portafolio',
  component: PortafolioComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
