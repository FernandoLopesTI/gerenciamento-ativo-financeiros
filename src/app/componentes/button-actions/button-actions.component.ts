import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-button-actions',
  templateUrl: './button-actions.component.html',
  styleUrls: ['./button-actions.component.css']
})
export class ButtonActionsComponent implements OnInit {

  @Input() id: number = 0;
  @Input() routerName: string = '';
  @Output() delete = new EventEmitter<any>();

  constructor(
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  onclickDelete = () =>{
    this.delete.emit(true);
  }

  onclickEdit = () =>{
    this.router.navigate([this.routerName, this.id]);
  }

}
