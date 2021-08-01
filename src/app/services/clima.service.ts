import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  url = 'https://api.openweathermap.org/data/2.5/weather?q=';
  key = 'd20adea66199b548e70f215b1fbeb6dd';

  constructor(private http: HttpClient) { }

  getClima(ciudad: string): Observable<any>{
    const URL = this.url + ciudad + '&appid='+ this.key;  
    return this.http.get(URL)
  }
}
