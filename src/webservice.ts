import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Webservice {
   sub = new BehaviorSubject<string>('ess');
  obs$ = new Observable<string>((obs)=>{
    obs.next('1')
  });
  ngOnInit(){
    
  }
  sendService(){
    return 'http://localhost:3000'
  }
  sendMessage(data:string){
    this.sub.next(data)
  }
}
