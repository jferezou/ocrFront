import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import {OnInit} from '@angular/core';
import 'rxjs/add/operator/map';
import { Resultat } from './resultat';
import { ResultatService } from './resultat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';
  private apiUrl ="http://localhost:8089/ocr/services/rest/traitement/t1";
  csvUrl ="http://localhost:8089/ocr/services/rest/traitement/getcsv";
  estimateTimeUrl ="http://localhost:8089/ocr/services/rest/traitement/estimatetime";
  resultat;
  currentItem;
  selectedPdf;
  estimateTime;
  estimateDate;
  private focused : boolean;
  constructor(private http: Http) {}
  
  ngOnInit(): void {
    // Make the HTTP request:
    this.http.get(this.apiUrl).subscribe(data => {
      // Read the result field from the JSON response.
      this.resultat = data.json();
	  this.currentItem = undefined;
    });
	
    this.http.get(this.estimateTimeUrl).subscribe(data => {
      // Read the result field from the JSON response.
      this.estimateTime = data.json().minutes;
	  this.estimateDate = data.json().estimatedDate;
    });
	
  }
  private onChange(newValue) {
	  var index = parseInt(this.selectedPdf);
	  var i = 0;
	  var trouve = false;
	  while (i < this.resultat.resultats.length && trouve === false) {
		  if(this.resultat.resultats[i].id === index) {
			  this.currentItem = this.resultat.resultats[i];
			  trouve = true;
		  }
			i++;
		}
  }
  passerVert(evt){
    this.currentItem.enregistre = true;
  }
  exporterCsv(event) {
    this.http.get(this.csvUrl).subscribe(data => {});
  }
}
