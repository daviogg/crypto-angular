import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AssetHistory, AssetItem, Assets, Interval } from '../models/assets';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  private BaseUrl = 'https://api.coincap.io/v2/assets';

  constructor(private httpClient: HttpClient) { }

  async getAssetsList(limit: number): Promise<Assets> {
    return await this.httpClient.get<Assets>(`${this.BaseUrl}?limit=${limit}`).toPromise();
  }

   getAssetHistory(
    id: string,
    interval: Interval,
    startDate: Date,
    endDate: Date): Observable<AssetHistory> {

    const startUnix = startDate.getTime();
    const endUnix = endDate.getTime();
    const enumInterval = Interval[interval];
    return this.httpClient.get<AssetHistory>(`${this.BaseUrl}/${id.toLowerCase()}/history?interval=${enumInterval}&start=${startUnix}&end=${endUnix}`);
  }
}
