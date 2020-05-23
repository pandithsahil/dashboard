import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-what-went-well',
  templateUrl: './what-went-well.component.html',
  styleUrls: ['./what-went-well.component.css']
})
export class WhatWentWellComponent implements OnInit {

  whatWentWell: any[]=[];
  item:string ="";
  constructor() { }

  ngOnInit() {
    this.whatWentWell =[];
    var input = document.getElementById("txt4");
    
  input.addEventListener("keyup", function(event) {
          if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("myBtn4").click();
          }
        });
  }

 
  addWhatWentWell(e){
    e.preventDefault();
    this.whatWentWell.push(this.item);
  }

}
