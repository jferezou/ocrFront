
import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, NgForm, Validators } from '@angular/forms';
import {OnInit} from '@angular/core';
 
@Component({
  selector: '[compositionview]',
  templateUrl: './compositionView.component.html',
  styleUrls: ['./compositionView.component.css']
})
export class CompositionViewComponent implements OnInit{
  @Input() composition;
  dominantIsChecked = false;
  accompagnementIsChecked = false;
  isoleIsChecked = false;
  isvalid=false;
  ngOnInit(): void {
    if(this.composition.type === 'Dominant') {
		this.dominantIsChecked=true;
	}
	else 
    if(this.composition.type === 'Accompagnement') {
		this.accompagnementIsChecked=true;
	}
	else {
		this.isoleIsChecked=true;
	}
  }
}