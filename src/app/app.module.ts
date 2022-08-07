import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AloMundoComponent } from './componentes/alo-mundo/alo-mundo.component';
import { CardTesteComponent } from './componentes/card-teste/card-teste.component';
import { ListTesteComponent } from './componentes/list-teste/list-teste.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { LogoComponent } from './componentes/logo/logo.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HeaderComponent } from './componentes/header/header.component';
import { HomeComponent } from './componentes/home/home.component';
import { RegisterComponent } from './componentes/register/register.component';
@NgModule({
  declarations: [
    AppComponent,
    AloMundoComponent,
    CardTesteComponent,
    ListTesteComponent,
    MenuComponent,
    LogoComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
