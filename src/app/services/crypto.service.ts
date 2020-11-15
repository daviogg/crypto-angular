import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AssetItem, Assets, Interval } from '../models/assets';


@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  private BaseUrl = 'https://api.coincap.io/v2/assets';

  constructor(private httpClient: HttpClient) {}

  async getAssetsList(limit: number): Promise<Assets>{
   return await this.httpClient.get<Assets>(`${this.BaseUrl}?limit=${limit}`).toPromise();
  }

  async getAssetHistory(
    id: string,
    interval: Interval,
    startDate: Date,
    endDate: Date ): Promise<any>{

      const startUnix = startDate.getTime() / 1000;
      const endUnix = endDate.getTime() / 1000;
      return await this.httpClient.get(`${this.BaseUrl}/${id}/history?interval=${interval}&start=${startUnix}&end=${endUnix}`)
        .toPromise();
  }
}


