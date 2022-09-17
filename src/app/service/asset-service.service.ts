import { ErrorUtil } from './../utils/error-util';
import { Observable } from 'rxjs';
import { RoutesAPI } from './../utils/routes-api';
import { Asset } from 'src/model/assets';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AssetServiceService {

  constructor(private httpClient:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getAssetById(id: number): Observable<Asset> {
    const query: HttpParams = new HttpParams().set('id', id);
    const options = id ? { params: query } : {};

    return this.httpClient.get<Asset>(`${RoutesAPI.ASSET_NT}`, options)
    .pipe(catchError(ErrorUtil.handleError));
  }

  save(asset: Asset): Observable<Asset>{
    if(asset.quantity && asset.price)
    asset.total = (asset.quantity * asset.price);

    return this.httpClient.post<Asset>(
      `${RoutesAPI.ASSET_NT}`,
      asset,
      this.httpOptions
    );
  }

  update(asset: Asset): Observable<Asset> {
    if(asset.quantity && asset.price)
    asset.total = (asset.quantity * asset.price);

    return this.httpClient.put<Asset>(
      `${RoutesAPI.ASSET_NT}/${asset.id}`,
      asset,
      this.httpOptions
    );
  }

  delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(
      `${RoutesAPI.ASSET_NT}/${id}`
    );
  }

  patch(asset: Asset): Observable<Asset> {
    return this.httpClient.patch<Asset>(
      `${RoutesAPI.ASSET_NT}/${asset.id}`,
      asset,
      this.httpOptions
    );
  }

  getAssets():Observable<Asset[]>{
    return this.httpClient.get<Asset[]>(`${RoutesAPI.ASSET}`);
  }

  isExist(id: number): boolean {
    this.getAssetById(id).subscribe(obj => {
      return true;
    })
    return false;
  }


}
