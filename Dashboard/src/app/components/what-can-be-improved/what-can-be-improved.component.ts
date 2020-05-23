import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-what-can-be-improved',
  templateUrl: './what-can-be-improved.component.html',
  styleUrls: ['./what-can-be-improved.component.css']
})
export class WhatCanBeImprovedComponent implements OnInit {

  whatCanBeImproved: any[]=[];
  item:string ="";
  constructor() { }

  ngOnInit() {
    this.whatCanBeImproved =[];
    var input = document.getElementById("txt3");
    
  input.addEventListener("keyup", function(event) {
          if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("myBtn3").click();
          }
        });
  }


  addWhatCanBeImproved(e){
    debugger
    e.preventDefault();
    this.whatCanBeImproved.push(this.item);
  }
}
