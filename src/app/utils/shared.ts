import { Asset } from 'src/model/assets';
import { AssetStorageService } from './../componentes/register/asset-storage.service';
export class Shared{
  constructor() {}
  public static initializeWebStorage(assets: Asset[]): void {

    localStorage.setItem(AssetStorageService.KEY, JSON.stringify([]));

    localStorage.setItem(AssetStorageService.KEY, JSON.stringify(assets));

  }

}
