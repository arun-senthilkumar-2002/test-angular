import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Webservice } from '../webservice';
@Component({
  selector: 'app-child-component',
  standalone: false,
  templateUrl: './child-component.html',
  styleUrl: './child-component.scss',
})
export class ChildComponent {
@Output() sharedvalue = new EventEmitter<string>();
@Input() valuepass = '';
myvalue!:string;

constructor(private el:Webservice){}
sendData(){
this.sharedvalue.emit(this.myvalue)
}
ngOnInit(){
  console.log("local ",this.el.sendService());
 
  this.el.sub.subscribe(val=>{
      console.log("valu in shild",val);
      
    })
     this.el.sendMessage('dadas');
}
}
