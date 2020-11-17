import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AssetDetailComponent } from './asset-detail.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AssetDetailComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatPaginatorModule,
    ChartsModule
  ],
  exports: [
    AssetDetailComponent
  ]
})
export class AssetsDetailModule { }
