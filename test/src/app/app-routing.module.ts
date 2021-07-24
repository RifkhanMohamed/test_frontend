import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path : "style-entry", loadChildren : () => import('./style-entry/style-entry.module').then(m=>m.StyleEntryModule)},
  {path : "order-entry", loadChildren : () => import('./order-entry/order-entry.module').then(m=>m.OrderEntryModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
