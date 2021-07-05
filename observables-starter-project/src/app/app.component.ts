// import { error } from '@angular/compiler/src/util';
// import { Component, OnInit } from '@angular/core';
// // import { count } from 'console';
// import { interval, Observable, observable, Subscription } from 'rxjs';


// @Component({
//   
//   templateUrl: '',
//   styleUrls: 
// })
// export class AppComponent implements OnInit {
//   mySubscription:Subscription
//   constructor() {}

//     customObservable=Observable.create(observer=>{
//     let count=0
//     setInterval(()=>{
//       observer.next(count)
//       if (count>5){
//         observer.error(new Error('count is greater than 5'))
        
//       }
      

      
//       count++
//     },1000)
//     this.mySubscription=this.customObservable.subscribe((data:number)=>{
//       console.log(data)
//     })
//   })
    

//     ngOnInit() {
//       this.mySubscription=  interval(1000)
//         .subscribe(count=>{
//           console.log(count)
//         },(error)=>{
//           console.log('error')
//         },()=>{
//           console.log('observable completed')
//         })
        
//       }
//     ngOnDestroy(){
//       this.mySubscription.unsubscribe();
//     }
   
//     }
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
mySubscription:Subscription
  constructor() { }

  ngOnInit() {
  // this.mySubscription=  interval(1000)
  //   .subscribe(count=>{
  //     console.log(count)
  //   });
  const customObservable=Observable.create(observer=>{
    let count=0;
    setInterval(()=>{
      observer.next(count);
      if(count>3){
        observer.complete();
      }
      if(count>5){
        observer.error(new Error('Count is greater than 5'));
        
      }
      count++;

    },1000)
  })
  this.mySubscription=customObservable
//   .pipe(map((data:number)=>{
// return
  
  .subscribe(
    (data:number)=>{
    console.log('ROUND:'+data)
  },
  (error)=>{
    alert(error.message)
    
  },
  ()=>{
    console.log('Observable completed')
  }
  )
  
}
ngOnDestroy(){
  this.mySubscription.unsubscribe();
}
  
}









