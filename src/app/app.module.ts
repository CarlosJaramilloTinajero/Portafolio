import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { PortafolioComponent } from './Components/portafolio/portafolio.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ProyectoMasComponent } from './Components/proyecto-mas/proyecto-mas.component';
import { ContactoComponent } from './Components/contacto/contacto.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavbarComponent,
    PortafolioComponent,
    FooterComponent,
    ProyectoMasComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
