import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Asset } from 'src/model/assets';
import { AssetStorageService } from './../register/asset-storage.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [AssetStorageService],
})
export class HomeComponent implements OnInit {

  title:string = "Lista de ativos";
  @Output() activate : EventEmitter<any> = new EventEmitter<any>();
  assets!: Asset[];
  isSuccess!: boolean;
  message!: string;
  isShowMessage: boolean = false;


  constructor(private assetStorageService :AssetStorageService) {this.activate.emit(this.title); }

  ngOnInit(): void {
    this.assets = this.assetStorageService.getAssets();
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

    let response: boolean = this.assetStorageService.delete(id);
    this.isShowMessage = true;
    this.isSuccess = response;
    if (response) {
      this.message = 'O Ativo foi removido com sucesso!';
    } else {
      this.message = 'Atenção! O Ativo não pode ser removido!';
    }
    this.assets = this.assetStorageService.getAssets();
  }

}
