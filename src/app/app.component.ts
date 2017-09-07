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
	//resultatBooks: Promise<String>
	//   resultat: String;
	//   errorMessage: String;
	//   constructor(private ResultatService: ResultatService) { }
	//   ngOnInit(): void {
	//	this.resultatBooks = this.ResultatService.getResultatWithPromise();
	//	this.resultatBooks.then(
	//		   resultatValue => this.resultat = resultatValue,
	//		   error =>  this.errorMessage = <any>error);
	//   }
  title = 'app';
  private apiUrl ="http://localhost:8089/ocr/services/rest/traitement/t1";
  resultat;
  currentItem;
  selectedPdf;
  constructor(private http: Http) {}
  
  ngOnInit(): void {
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
}
