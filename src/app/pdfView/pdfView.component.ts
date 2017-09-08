
import { Component, Input, ViewChildren, OnChanges, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
 
@Component({
  selector: 'mypdfview',
  templateUrl: './pdfview.component.html',
  styleUrls: ['./pdfview.component.css']
})
export class PdfViewComponent implements OnChanges {
	@Input() currentItem: string;
  
	private saveUrl ="http://localhost:8089/ocr/services/rest/traitement/save";
  constructor(private http: Http) {}

  ngOnChanges(changes: SimpleChanges) {
        console.log('onChange fired');
		this.currentItem=changes.currentItem.currentValue;
    }
		
		
	public onSubmit(f: NgForm) {
		const body = JSON.stringify(f.value); 
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		this.http.post(this.saveUrl, body,{headers: headers}).subscribe(r=>{});;
	}
}