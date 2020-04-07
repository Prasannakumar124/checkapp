import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {

 initialvaluechanged:string='all'

  @Output() radiobuttonChanged:EventEmitter<string>=new EventEmitter()

  @Input() All:number;
  @Input() Male:number;
  @Input() Female:number;

  constructor() { }

  ngOnInit() {
  }

  radiobuttonclicked(){
    this.radiobuttonChanged.emit(this.initialvaluechanged)
    console.log(this.initialvaluechanged);
  }

}
