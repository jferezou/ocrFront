
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
export class PdfViewComponentResidus implements OnChanges {
	@Input() currentId: string;
	@Output() validateEnregistrer : EventEmitter<boolean> = new EventEmitter<boolean>();
	myConfig = config;
	currentItem;
	validerKo;
	validerOk;
  
	private saveUrl =config.protocol+"://"+config.server+":"+config.port+"/ocr/services/rest/residus/save";
	private getUrl =config.protocol+"://"+config.server+":"+config.port+"/ocr/services/rest/residus/get";
  constructor(private http: Http) {}

  ngOnChanges(changes: SimpleChanges) {
        console.log('onChange fired');
		this.currentId = changes.currentId.currentValue;
		this.validerKo = undefined;
		this.validerOk = undefined;		
		// Make the HTTP request:
		this.http.get(this.getUrl+ "/"+this.currentId).subscribe(data => {
		  // Read the result field from the JSON response.
		  this.currentItem = data.json();
		});
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
		    .then((response) => {
					this.validateEnregistrer.emit(true);
					this.validerKo = undefined;
					this.validerOk = "Bien enregistré !";
				})
			.catch((error) => {
					var myException = error._body;
					this.validerKo = myException;
					this.validerOk = undefined;		
				});
    }
	
	addGmsRow() {
      this.currentItem.gmsList.push({trace:false,value:"",pourcentage:0.0});
    }
	addLmsRow() {
      this.currentItem.lmsList.push({trace:false,value:"",pourcentage:0.0});
    }
}