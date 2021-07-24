import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-style-entry',
  templateUrl: './style-entry.component.html',
  styleUrls: ['./style-entry.component.css']
})
export class StyleEntryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  form1 = new FormGroup({
    status:new FormControl(''),
    type:new FormControl(''),
    number:new FormControl(''),
    name:new FormControl(''),
    quantity:new FormControl('')
  })
}
