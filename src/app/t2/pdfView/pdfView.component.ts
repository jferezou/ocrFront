
import { Component, Input, Output, EventEmitter, ViewChildren, OnChanges, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import {config} from '../../configuration';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
 
@Component({
  selector: 'mypdfview2',
  templateUrl: './pdfview.component.html',
  styleUrls: ['./pdfview.component.css']
})
export class PdfViewComponentT2 implements OnChanges {
	@Input() currentId: string;
	@Output() validateEnregistrer : EventEmitter<boolean> = new EventEmitter<boolean>();
	myConfig = config;
	currentItem: string;
  
	private saveUrl =config.protocol+"://"+config.server+":"+config.port+"/ocr/services/rest/traitement/savet2";
	private getUrl =config.protocol+"://"+config.server+":"+config.port+"/ocr/services/rest/traitement/gett2";
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
	
	private handleError (error: Response | any) {
		var myException = JSON.parse(error._body);
		alert(myException.exception);
    }	
	
	public onSubmit(f: NgForm) {
		const body = JSON.stringify(f.value); 
		this.postItemsWithPromise(body);
	}
	
	private postItemsWithPromise(body : String): Promise<void> {
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
        return this.http.post(this.saveUrl, body,{headers: headers})
			.toPromise()
		    .then((response) => {this.validateEnregistrer.emit(true)})
			.catch(this.handleError);
    }
}