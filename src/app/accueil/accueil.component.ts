import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import {OnInit} from '@angular/core';
import 'rxjs/add/operator/map';
import {config} from '../configuration';
import { Router } from '@angular/router';

@Component({
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})

export class Accueil {
	listefichiers = [];
	myConfig = config;
	constructor(private router: Router) {}
	
	navigatet1(){
	 this.router.navigate(["traitementT1", this.listefichiers]);
	}
	
	navigatet2(){
	 this.router.navigate(["traitementT2", this.listefichiers]);
	}
	onFileChange(event) {   
		var liste = event.target.files;
		var arrayLength = liste.length;
		for (var i = 0; i < arrayLength; i++) {
			var myFile = liste[i];
			if(myFile.type === "application/pdf") {
				var mypath = myFile.webkitRelativePath;
				this.listefichiers.push(mypath);
			}
		} 
	}
}

