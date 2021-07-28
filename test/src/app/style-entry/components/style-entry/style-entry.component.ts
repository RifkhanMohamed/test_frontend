import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StyleEntryService } from "./../../services/style-entry.service";
import { Category } from "./../../modal/style-entry";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-style-entry',
  templateUrl: './style-entry.component.html',
  styleUrls: ['./style-entry.component.css']
})
export class StyleEntryComponent implements OnInit {
  category: Category[] = [];
  constructor(private service:StyleEntryService) { }

  ngOnInit(): void {
  this.getCategory();
  }

  form1 = new FormGroup({
    status:new FormControl(''),
    type:new FormControl(''),
    number:new FormControl(''),
    name:new FormControl(''),
    quantity:new FormControl('')
  });

  getCategory(){
    this.service.getAllCategory().toPromise()
    .then(res=>{
      this.category=res as Category[];
      console.log(this.category);
      
    }
      )
      .catch(e=>{
        console.log(e);    
      })
  }
}
