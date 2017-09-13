import { Component } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import {OnInit} from '@angular/core';
import 'rxjs/add/operator/map';
import {config} from '../configuration';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './t1.component.html',
  styleUrls: ['./t1.component.css']
})

export class T1Component implements OnInit {
  myConfig = config;
  title = 'app';
  private apiUrl =config.protocol+"://"+config.server+":"+config.port+"/ocr/services/rest/traitement/t1";
  csvUrl =config.protocol+"://"+config.server+":"+config.port+"/ocr/services/rest/traitement/getcsv";
  estimateTimeUrl =config.protocol+"://"+config.server+":"+config.port+"/ocr/services/rest/traitement/estimatetime";
  resultat;
  currentItem;
  selectedPdf;
  estimateTime;
  estimateDate;
  private focused : boolean;
  constructor(private http: Http, private route: ActivatedRoute) {}
  
  ngOnInit(): void {
	   this.route.params.subscribe(params => {
		const body = JSON.stringify(params); 
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		this.http.post(this.apiUrl, body,{headers: headers}).subscribe(data => {
		  // Read the result field from the JSON response.
		  this.resultat = data.json();
		  this.currentItem = undefined;
		});	
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
