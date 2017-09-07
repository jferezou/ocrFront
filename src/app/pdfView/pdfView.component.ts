
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
 
@Component({
  selector: 'mypdfview',
  templateUrl: './pdfview.component.html',
  styleUrls: ['./pdfview.component.css']
})
export class PdfViewComponent implements OnChanges {
  @Input() currentItem: string;
  
   refresh(newCurrentItem){
    this.currentItem = newCurrentItem;
  }    
  ngOnChanges(changes: SimpleChanges) {
        console.log('onChange fired');
		this.currentItem=changes.currentItem.currentValue;
    }
}