import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-button-actions',
  templateUrl: './button-actions.component.html',
  styleUrls: ['./button-actions.component.css']
})
export class ButtonActionsComponent implements OnInit {

  @Input() id: number = 0;
  @Input() routerName: string = '';

  constructor(
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  onclickDelete = () =>{
    console.log(this.id);
  }

  onclickEdit = () =>{
    this.router.navigate([this.routerName, this.id]);
  }

}
