import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StyleEntryComponent } from './components/style-entry/style-entry.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule,FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

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
    [RouterModule.forChild(routes)],
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class StyleEntryModule { }
