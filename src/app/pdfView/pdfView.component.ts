
import { Component, Input, ViewChildren, OnChanges, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
 
@Component({
  selector: 'mypdfview',
  templateUrl: './pdfview.component.html',
  styleUrls: ['./pdfview.component.css']
})
export class PdfViewComponent implements OnChanges {
  @Input() currentItem: string;
  

  ngOnChanges(changes: SimpleChanges) {
        console.log('onChange fired');
		this.currentItem=changes.currentItem.currentValue;
    }
	public onSubmit(f: NgForm) {
		console.log(f.value); 
	}
}