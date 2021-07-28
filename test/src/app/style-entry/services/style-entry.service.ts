import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../environments/environment";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StyleEntryService {
  readonly url= environment.base_url;
  
  private GetAllCategory= this.url+"/get-category";
  private GetAllItem=this.url+"/get-item-code";
  constructor(private http: HttpClient) { }

  getAllCategory(){
    return this.http.get<any>(this.GetAllCategory);
  }
  getAllItem(){
    return this.http.get<any>(this.GetAllItem);
  }
}
