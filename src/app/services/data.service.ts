import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }
  
  //creating get function to retrieve data from api
  getStudentData():Observable<any> {
    return this.httpClient.get('https://jsonblob.com/api/jsonblob/1336347674273832960')
  }
}
