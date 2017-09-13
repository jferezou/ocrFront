
import { Component, Input, Output, EventEmitter, ViewChildren, OnChanges, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
 
@Component({
  selector: 'mypdfview2',
  templateUrl: './pdfview.component.html',
  styleUrls: ['./pdfview.component.css']
})
export class PdfViewComponentT2 implements OnChanges {
	@Input() currentItem: string;
	@Output() validateEnregistrer : EventEmitter<boolean> = new EventEmitter<boolean>();
  
	private saveUrl ="http://localhost:8089/ocr/services/rest/traitement/savet2";
  constructor(private http: Http) {}

  ngOnChanges(changes: SimpleChanges) {
        console.log('onChange fired');
		this.currentItem=changes.currentItem.currentValue;
    }
		
		
	public onSubmit(f: NgForm) {
		const body = JSON.stringify(f.value); 
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		this.http.post(this.saveUrl, body,{headers: headers}).subscribe(r=>{});
		this.validateEnregistrer.emit(true);
	}
}