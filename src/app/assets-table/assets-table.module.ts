import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetsTableComponent } from './assets-table.component';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ShortNumberPipe } from '../pipes/short-number.pipe';



@NgModule({
  declarations: [
    AssetsTableComponent,
    ShortNumberPipe
  ],
  imports: [
    CommonModule,
    MatTableModule,
    HttpClientModule,
    MatPaginatorModule
  ],
  exports: [
    AssetsTableComponent
  ]
})
export class AssetsTableModule { }
