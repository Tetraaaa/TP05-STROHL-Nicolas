import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscriber } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  

  constructor(private http: HttpClient) { 
    
  }

  getData()
  {
    return this.http.get(environment.baseUrl);
  }

}
