import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import {OnInit} from '@angular/core';
import 'rxjs/add/operator/map';
import {config} from '../../configuration';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './aggregation.component.html'
})

export class AggregationResidus implements OnInit {
  myConfig = config;
  private apiUrl = config.protocol+"://"+config.server+":"+config.port+"/ocr/services/rest/residus/pdf/aggregate";
  estimateTimeUrl =config.protocol+"://"+config.server+":"+config.port+"/ocr/services/rest/traitement/estimatetime?multiplicateur="+config.t2mult+"&isPalynologie=false";
  resultat;
  estimateTime;
  estimateDate;
  constructor(private http: Http, private route: ActivatedRoute) {}
  
  ngOnInit(): void {  
    // Make the HTTP request:
    this.http.get(this.apiUrl).subscribe(data => {});	
	
    this.http.get(this.estimateTimeUrl).subscribe(data => {
      // Read the result field from the JSON response.
      this.estimateTime = data.json().minutes;
	  this.estimateDate = data.json().estimatedDate;
    });
  }
  
}