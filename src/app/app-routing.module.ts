import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { RegisterComponent } from './componentes/register/register.component';

const routes: Routes = [
  {path: '',redirectTo: 'inicio', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'cadastrar', component: RegisterComponent },
  { path: 'cadastrar/:id', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
