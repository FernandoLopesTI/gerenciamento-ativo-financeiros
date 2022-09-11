import { Component, OnInit, Output , EventEmitter} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import * as M from 'materialize-css';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  title = "Cadastrar ativos";
  @Output() activate = new EventEmitter<any>();
  optionsDate = {
  
  };

  constructor(private route: ActivatedRoute) { 
    this.activate.emit(this.title);
    document.addEventListener('DOMContentLoaded', function() {
      var select = document.querySelectorAll('select');
      var date = document.querySelectorAll('.datepicker');
      var options = {};
      
      var selects = M.FormSelect.init(select, options);
      var dates = M.Datepicker.init(date);


    });
  }

  ngOnInit(): void {
    let idParam: number = + this.route.snapshot.paramMap.get('id')!;
    if (idParam) {
      alert('Registro para editar id: ' + idParam);
    }
    
  }

}
