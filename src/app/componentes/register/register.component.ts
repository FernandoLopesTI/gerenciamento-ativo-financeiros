import { Shared } from './../../utils/shared';
import { AssetStorageService } from './asset-storage.service';
import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as M from 'materialize-css';
import { Asset } from 'src/model/assets';
import { NgForm } from '@angular/forms';

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
  isSuccess!: boolean;
  message!: string;
  isShowMessage: boolean = false;

  constructor(private route: ActivatedRoute, private assetStorageService: AssetStorageService, private router: Router) {
    this.activate.emit(this.title);
  }

  ngOnInit(): void {
    Shared.initializeWebStorage();
    this.asset = Asset.new();
    let idParam: number = + this.route.snapshot.paramMap.get('id')!;
    if (idParam) {
      this.asset = this.assetStorageService.getAssetById(idParam);
    }

  }

  onSubmit() {
    if (!this.assetStorageService.isExist(this.asset.id)) {
      this.assetStorageService.save(this.asset);
    } else {
      this.assetStorageService.update(this.asset);
      this.router.navigate(['home']);
    }
    this.isShowMessage = true;
    this.isSuccess = true;
    this.message = 'Cadastro realizado com sucesso!';

    this.form.reset();
    this.asset = Asset.new();
  }

  onSelectChange(event: Event) {

  }

}
