import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  private apiUrl ='http://localhost:8080/traitement';
  results;
  
  constructor(private http: Http) {}
  
  ngOnInit(): void {
    // Make the HTTP request:
    this.http.get(this.apiUrl).subscribe(data => {
      // Read the result field from the JSON response.
      this.results = data.json();
    });
  }
}
