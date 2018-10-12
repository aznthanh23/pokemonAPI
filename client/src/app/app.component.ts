import { Component } from '@angular/core';
import { HttpService } from './http.service'; // importing HttpService

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MEAN by GL';
  constructor(private _httpService: HttpService) { } // injecting _httpService
}
