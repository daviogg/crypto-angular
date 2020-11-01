import { Component, OnInit} from '@angular/core';
import { Assets } from '../models/assets';
import { CryptoService } from '../services/crypto.service';

@Component({
  selector: 'app-assets-table',
  templateUrl: './assets-table.component.html',
  styleUrls: ['./assets-table.component.scss']
})
export class AssetsTableComponent implements OnInit{
  displayedColumns: string[] = ['symbol', 'rank', 'name', 'price', 'marketCap', 'supply', 'volume', 'change'];
  dataSource: TableAssetItem[] = [];

  constructor(private service: CryptoService){
  }

  ngOnInit(): void {
   this.DisplayAssets();
  }

  private async DisplayAssets(): Promise<void>
  {
    const ds: Assets = await this.service.getAssetsList(10);
    const tableObject: TableAssetItem[]  = [];

    ds.data.forEach(r => {
      const row: TableAssetItem = {
        name : r.name,
        change : r.changePercent24Hr,
        marketCap : r.marketCapUsd,
        price : r.priceUsd,
        rank : r.rank,
        supply : r.supply,
        symbol : r.symbol,
        volume : r.volumeUsd24Hr
      };
      tableObject.push(row);

    });

    this.dataSource = tableObject;
  }
}
export interface TableAssetItem {
  symbol: string;
  rank: string;
  name: string;
  price: string;
  marketCap: string;
  supply: string;
  volume: string;
  change: string;
}

