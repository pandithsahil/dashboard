import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-start-doing',
  templateUrl: './start-doing.component.html',
  styleUrls: ['./start-doing.component.css']
})
export class StartDoingComponent implements OnInit {

  startDoing: any[]=[];
  item:string ="";
  constructor() { 

     


     
        }

  ngOnInit() {
    this.startDoing =[]

    var input = document.getElementById("txt2");

    input.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("myBtn").click();
      }
    });
  }

  getFocus(){
    debugger
    document.getElementById("mySubmit").focus();
  }

  addStartDoing(e){
    e.preventDefault();
    this.startDoing.push(this.item);
  }

 


}
