import { Shared } from './../../utils/shared';
import { AssetServiceService } from './../../service/asset-service.service';
import { AssetStorageService } from './../register/asset-storage.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Asset } from 'src/model/assets';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title:string = "Lista de ativos";
  @Output() activate : EventEmitter<any> = new EventEmitter<any>();
  assets!: Asset[];
  isSuccess!: boolean;
  message!: string;
  isShowMessage: boolean = false;

  constructor(private assetStorageService :AssetServiceService) {this.activate.emit(this.title); }

  ngOnInit(): void {
    this.getAllRegistro();

  }

  getAllRegistro(){
    this.assetStorageService.getAssets().subscribe(
      (data: Asset[] ) => {
        if (!data || data.length == 0) {
          alert('Nenhum resultado foi encontrado!');
        }
        this.assets = data;
        Shared.initializeWebStorage(this.assets);
      }
  );
  }

  getRouter():string {
    return "cadastrar";
  }

  onDelete(id:number){
    let confirmation = window.confirm(
      'Você tem certeza que deseja remover o ativo ' + id
    );

    if (!confirmation) {
      return;
    }

    this.assetStorageService.delete(id).subscribe(
      () => {
        this.isShowMessage = true;
        this.isSuccess = true;
        this.message = 'O Ativo foi removido com sucesso!';
        this.getAllRegistro()
      }
    );

  }

  showdelet(){

  }

}
