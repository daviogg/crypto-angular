import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import { AssetsTableComponent } from './assets-table/assets-table.component';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { CryptoService } from './services/crypto.service';
import { HttpClientModule } from '@angular/common/http';
import { ShortNumberPipe } from './pipes/short-number.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AssetsTableComponent,
    ShortNumberPipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    CommonModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [
  CryptoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
