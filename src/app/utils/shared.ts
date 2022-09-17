import { Asset } from 'src/model/assets';
import { AssetStorageService } from './../componentes/register/asset-storage.service';
export class Shared{
  constructor() {}
  public static initializeWebStorage(): void {
    if (localStorage.getItem(AssetStorageService.KEY) != null) {
      return;
    }
    localStorage.setItem(AssetStorageService.KEY, JSON.stringify([]));

    let assets = [new Asset("PETR4",  "AÇÃO", 20 , new Date() , 27.21, 29.32)]

    localStorage.setItem(AssetStorageService.KEY, JSON.stringify(assets));

  }

}
