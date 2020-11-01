import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AssetItem, Assets } from '../models/assets';


@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  constructor(private httpClient: HttpClient) {}

  async getAssetsList(limit: number): Promise<Assets>{
   return await this.httpClient.get<Assets>(`https://api.coincap.io/v2/assets?limit=${limit}`).toPromise();
  }
}
