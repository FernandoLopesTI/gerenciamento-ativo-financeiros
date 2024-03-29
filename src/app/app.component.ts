import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gerenciamento de Ativo Financeiros';
  titleRouter: string = '';
  year: number = new Date().getFullYear();

  onActivate(event : any){
    this.titleRouter = event.title;
  }

}

