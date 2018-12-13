import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'text-input',
  templateUrl: './text-component.component.html',
  styleUrls: ['./text-component.component.css']
})
export class TextComponentComponent implements OnInit {
  @Input('placeholder') placeholder: string;
  @Input('inputId') inputId: string;
  @Input('iconClass') iconClass: string;
  @Input('validMessage') validMessage: string;
  @Input('invalidMessage') invalidMessage: string;
  @Input('required') required: boolean;
  @Input('bindValue') bindValue: string;

  appendIconClass: string;
  tooltipMessage: string;
  fieldValue: string;
  constructor() { }

  ngOnInit() {
  }

  validate() {
    if (this.required) {
      if (this.fieldValue) {
        this.appendIconClass = 'fa fa-smile-o';
        this.tooltipMessage = this.validMessage;
      } else {
        this.appendIconClass = 'fa fa-frown-o';
        this.tooltipMessage = this.invalidMessage;
      }
    } else {
      this.appendIconClass = 'fa fa-smile-o';
      this.tooltipMessage = this.validMessage;
    }
  }

}
