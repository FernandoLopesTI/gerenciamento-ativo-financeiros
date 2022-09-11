import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title:string = "Lista de ativos";
  @Output() activate : EventEmitter<any> = new EventEmitter<any>();

  constructor() {this.activate.emit(this.title); }

  ngOnInit(): void {
    
  }

  getRouter():string {
    return "cadastrar";
  }

}
