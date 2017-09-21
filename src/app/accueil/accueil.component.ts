import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import {OnInit} from '@angular/core';
import 'rxjs/add/operator/map';
import {config} from '../configuration';

@Component({
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})

export class Accueil {
	myConfig = config;	
    aggregationUrl = config.protocol+"://"+config.server+":"+config.port+"/ocr/services/rest/residus/pdf/aggregate";
}

