import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import {OnInit} from '@angular/core';
import 'rxjs/add/operator/map';
import {config} from '../configuration';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './t2.component.html',
  styleUrls: ['./t2.component.css']
})

export class T2Component implements OnInit {
  myConfig = config;
  private apiUrl = config.protocol+"://"+config.server+":"+config.port+"/ocr/services/rest/traitement/t2";
  csvUrl = config.protocol+"://"+config.server+":"+config.port+"/ocr/services/rest/traitement/getcsvt2";
  resultat;
  currentItem;
  selectedPdf;
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
	  this.currentItem = undefined;
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
