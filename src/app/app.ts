import { Component, signal } from '@angular/core';
import { Webservice } from '../webservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('test');
  valuefromchild!:string;
  valuepass:string = "dasdas";

  constructor(private el:Webservice){}
  ngOnInit(){
    this.el.obs$.subscribe((data)=>{
      console.log('Observable',data);
    })
    this.el.sub.subscribe(val=>{
      console.log("valu in app",val);
      
    })
  }
  receive(data:string){
   this.valuefromchild = data; 
  }
}
