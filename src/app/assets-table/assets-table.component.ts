import { AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { Assets } from '../models/assets';
import { CryptoService } from '../services/crypto.service';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-assets-table',
  templateUrl: './assets-table.component.html',
  styleUrls: ['./assets-table.component.scss']
})
export class AssetsTableComponent implements OnInit, AfterViewInit{
  displayedColumns: string[] = ['symbol', 'rank', 'name', 'price', 'marketCap', 'supply', 'volume', 'change'];
  dataSource: MatTableDataSource<TableAssetItem>;

  constructor(private service: CryptoService){
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.PopulateDataSource();
  }

  private async PopulateDataSource(): Promise<void>
  {
    const ds: Assets = await this.service.getAssetsList(50);
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
    this.dataSource = new MatTableDataSource<TableAssetItem>(tableObject);
    this.dataSource.paginator = this.paginator;
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

