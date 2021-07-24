import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StyleEntryComponent } from './components/style-entry/style-entry.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: StyleEntryComponent
  }
];
@NgModule({
  declarations: [
    StyleEntryComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)]
  ]
})
export class StyleEntryModule { }
