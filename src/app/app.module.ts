import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AloMundoComponent } from './componentes/alo-mundo/alo-mundo.component';
import { CardTesteComponent } from './componentes/card-teste/card-teste.component';
import { ListTesteComponent } from './componentes/list-teste/list-teste.component';

@NgModule({
  declarations: [
    AppComponent,
    AloMundoComponent,
    CardTesteComponent,
    ListTesteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
