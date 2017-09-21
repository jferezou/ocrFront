import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import {OnInit} from '@angular/core';
import 'rxjs/add/operator/map';
import {config} from '../configuration';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './residus.component.html',
  styleUrls: ['./residus.component.css']
})

export class Residus implements OnInit {
  myConfig = config;
  private apiUrl = config.protocol+"://"+config.server+":"+config.port+"/ocr/services/rest/residus/extraire";
  csvUrl = config.protocol+"://"+config.server+":"+config.port+"/ocr/services/rest/residus/export/csv";
  estimateTimeUrl =config.protocol+"://"+config.server+":"+config.port+"/ocr/services/rest/traitement/estimatetime?multiplicateur="+config.t2mult+"&isPalynologie=false";
  resultat;
  currentItem;
  selectedPdf;
  estimateTime;
  estimateDate;
  private focused : boolean;
  constructor(private http: Http, private route: ActivatedRoute) {}
  
  ngOnInit(): void {
	  this.route.params.subscribe(params => {
		console.log(params);
	  });
  
    // Make the HTTP request:
    this.http.get(this.apiUrl).subscribe(data => {
      // Read the result field from the JSON response.
      this.resultat = data.json();
	  var tutu = this.resultat.resultats;
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