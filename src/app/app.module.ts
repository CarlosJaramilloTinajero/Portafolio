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
import { PuntoComponent } from './Components/punto/punto.component';
import { HttpClientModule } from '@angular/common/http';
import { MensajesComponent } from './Components/mensajes/mensajes.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { ExperienceComponent } from './Components/experience/experience.component';
import { PopUpComponent } from './Components/pop-up/pop-up.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavbarComponent,
    PortafolioComponent,
    FooterComponent,
    ProyectoMasComponent,
    ContactoComponent,
    PuntoComponent,
    MensajesComponent,
    SkillsComponent,
    ExperienceComponent,
    PopUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
