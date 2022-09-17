import { AssetServiceService } from './../../service/asset-service.service';
import { Shared } from './../../utils/shared';
import { AssetStorageService } from './asset-storage.service';
import { Component, OnInit, Output, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as M from 'materialize-css';
import { Asset } from 'src/model/assets';
import {  NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [AssetStorageService],
})

export class RegisterComponent implements OnInit {
  @ViewChild('form') form!: NgForm;
  title = "Cadastrar ativos";
  @Output() activate = new EventEmitter<any>();

  asset!: Asset;
  assets! : Asset[];
  isSuccess!: boolean;
  message!: string;
  isShowMessage: boolean = false;

  constructor(private route: ActivatedRoute,
    private assetStorageService: AssetServiceService,
    private storage: AssetStorageService,
    private router: Router) {
    this.activate.emit(this.title);


  }

  ngOnInit(): void {
     this.asset = Asset.new();
     let idParam: number = + this.route.snapshot.paramMap.get('id')!;
    if (idParam) {
      this.asset = this.storage.getAssetById(idParam);
    }

  }


  onSubmit() {
    this.message = 'Cadastro realizado com sucesso!';
    if (!this.storage.isExist(this.asset.id)) {
      this.storage.save(this.asset);
      this.assetStorageService.save(this.asset).subscribe(() => {
        this.isShowMessage = true;
        this.isSuccess = true;
        this.form.reset();
        this.asset = Asset.new();
      });
    } else {
      this.storage.update(this.asset);
      this.assetStorageService.update(this.asset).subscribe(() => {
        this.isShowMessage = true;
        this.isSuccess = true;
        this.form.reset();
        this.asset = Asset.new();
      });
      this.router.navigate(['home']);
    }

  }

  onSelectChange(event: Event) {

  }


}
