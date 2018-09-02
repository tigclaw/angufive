import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from './api-service.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  users = [];

  constructor(private apiService: ApiServiceService) {

  }

  ngOnInit() {
    console.log('init app.');
  }

  getUsers() {
    this.apiService.getUsers().subscribe(
      users => {
        this.users = users;
        console.log('App component fetched', this.users);
      },
      error => console.log('Error fetching', error)
    );
  }
}
