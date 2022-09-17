import { WebStorageUtil } from './../../utils/web-storage-util';

import { Asset } from './../../../model/assets';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class AssetStorageService {
  static KEY:string = 'assets';
  assets!: Asset[];
  asset!: Asset;
  private assetSource!: BehaviorSubject<number>;
  constructor(){
    this.assets = this.getAllAsset();
 //   this.assetSource = new BehaviorSubject<number>(this.assets.length);
  }

  getAllAsset(): Asset[]{
    return WebStorageUtil.get(AssetStorageService.KEY);
  }

  getAssetById(id: number): Asset {
    this.assets = this.getAllAsset();
    for (let a of this.assets) {
        if (a.id == id){
          this.asset = a;
        }
    }
    return this.asset;
  }

  save(asset: Asset){
    if(asset.quantity && asset.price)
    asset.total = (asset.quantity * asset.price);
    this.assets = this.getAllAsset();
    this.assets.push(asset);
    WebStorageUtil.set(AssetStorageService.KEY, this.assets);
  }

  update(asset: Asset){
     if(asset.quantity && asset.price)
      asset.total = (asset.quantity * asset.price);

    this.assets = this.getAllAsset();
    this.delete(asset.id);
    this.save(asset);
  }

  delete(id: number): boolean {
    this.assets = this.getAllAsset();
    this.assets = this.assets.filter((a) => {
      return a.id !== id;
    });
    WebStorageUtil.set(AssetStorageService.KEY, this.assets);
    return true;
  }

  getAssets():Asset[]{
    this.assets = this.getAllAsset();
    return this.assets;
  }

  isExist(id: number): boolean {
    this.assets = this.getAllAsset();
    for (let a of this.assets) {
        if (a.id == id){
          return true;
        }
    }
    return false;

  }

}
