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
}

