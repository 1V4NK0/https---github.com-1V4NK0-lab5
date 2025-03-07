import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './services/data.service';
import { CommonModule } from '@angular/common';
import { WeatherServiceService } from './services/weather-service.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  studentData:any[]=[]
  weatherData:any[] = []
  temperature:any = ""
 constructor(private dataService:DataService, private weatherService:WeatherServiceService) {}

 //WHEN COMPONENT GETS INITIALIZED
  ngOnInit(): void {
    this.dataService.getStudentData().subscribe(
      (data)=>{ 
        this.studentData = data.students
      }
    );

    //get weather data
    this.weatherService.getWeatherData().subscribe(
    (data) => {
      console.log(data);
      this.weatherData = data.weather;
      this.temperature = (data.main.temp - 273).toFixed(2);
    }
    )
  }
}
