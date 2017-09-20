import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import {OnInit} from '@angular/core';
import 'rxjs/add/operator/map';
import {config} from '../configuration';

@Component({
  templateUrl: './t1.component.html',
  styleUrls: ['./t1.component.css']
})

export class T1Component implements OnInit {
  myConfig = config;
  title = 'app';
  private apiUrl =config.protocol+"://"+config.server+":"+config.port+"/ocr/services/rest/palynologie/extraire";
  csvUrl =config.protocol+"://"+config.server+":"+config.port+"/ocr/services/rest/palynologie/export/csv";
  estimateTimeUrl =config.protocol+"://"+config.server+":"+config.port+"/ocr/services/rest/traitement/estimatetime?multiplicateur="+config.t1mult+"&ist1=true";
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
    this.currentItem.valider = true;
  }
  exporterCsv(event) {
    this.http.get(this.csvUrl).subscribe(data => {});
  }
}