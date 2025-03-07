import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  constructor(private httpClient:HttpClient) { }

  //function to fetch data from weather api
  getWeatherData():Observable<any> {
    return this.httpClient.get("https://api.openweathermap.org/data/2.5/weather?q=Galway&appid=6a66416403ed8e5e6e762cb8c261f303");
  }
}
