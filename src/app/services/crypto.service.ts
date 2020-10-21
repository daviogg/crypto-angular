import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AssetItem } from '../models/assets';


@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  constructor(private httpClient: HttpClient) {}

  getAssetsList(limit: number) : Observable<AssetItem[]>{
    return this.httpClient.get<AssetItem[]>(`https://api.coincap.io/v2/assets?limit=${limit}`);
  }
}
