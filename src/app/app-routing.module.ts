import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssetsTableComponent } from './assets-table/assets-table.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: AssetsTableComponent, pathMatch: 'full' },
  { path: '**', redirectTo: 'Home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
