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
import { CryptoService } from './services/crypto.service';
import { AssetDetailComponent } from './asset-detail/asset-detail.component';
import { AssetsTableModule } from './assets-table/assets-table.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AssetDetailComponent],
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
    AssetsTableModule
  ],
  providers: [
  CryptoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
