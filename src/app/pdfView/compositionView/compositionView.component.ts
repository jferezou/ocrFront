
import { Component, Input } from '@angular/core';
 
@Component({
  selector: 'compositionview',
  templateUrl: './compositionView.component.html',
  styleUrls: ['./compositionView.component.css']
})
export class CompositionViewComponent{
  @Input() composition: string;
  
}