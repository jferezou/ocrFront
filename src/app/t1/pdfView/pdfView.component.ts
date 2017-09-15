
import { Component, Input, Output, EventEmitter, ViewChildren, OnChanges, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import {config} from '../../configuration';
 
@Component({
  selector: 'mypdfview',
  templateUrl: './pdfview.component.html',
  styleUrls: ['./pdfview.component.css']
})
export class PdfViewComponent implements OnChanges {
	@Input() currentId: string;
	@Output() validateEnregistrer : EventEmitter<boolean> = new EventEmitter<boolean>();
	myConfig = config;
	currentItem: string;
  
	private saveUrl =config.protocol+"://"+config.server+":"+config.port+"/ocr/services/rest/traitement/save";
	private getUrl =config.protocol+"://"+config.server+":"+config.port+"/ocr/services/rest/traitement/gett1";
  constructor(private http: Http) {}

  ngOnChanges(changes: SimpleChanges) {
        console.log('onChange fired');
		this.currentId = changes.currentId.currentValue;
		// Make the HTTP request:
		this.http.get(this.getUrl+ "?id="+this.currentId).subscribe(data => {
		  // Read the result field from the JSON response.
		  this.currentItem = data.json();
		});
    }
		
		
	public onSubmit(f: NgForm) {
		const body = JSON.stringify(f.value); 
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		this.http.post(this.saveUrl, body,{headers: headers}).subscribe(r=>{});
		this.validateEnregistrer.emit(true);
	}
}