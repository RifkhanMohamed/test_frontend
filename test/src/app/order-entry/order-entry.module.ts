import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderEntryComponent } from './components/order-entry/order-entry.component';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    component: OrderEntryComponent
  }
];
@NgModule({
  declarations: [
    OrderEntryComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)]
  ]
})
export class OrderEntryModule { }
