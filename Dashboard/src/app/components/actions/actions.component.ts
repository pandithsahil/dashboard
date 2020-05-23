import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { debug } from 'util';
import { ViewChild } from '@angular/core';



@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {
  @ViewChild('name') inputElement: ElementRef;
  actionItems: any[]=[];
  item:string ="";
  constructor(private ref : ElementRef) { }

  ngOnInit() {
    this.actionItems =[];
    var input = document.getElementById("txt1");
   
    input.addEventListener("keyup", function(event) {
          if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("myBtn1").click();
          }
        });
  }

  addActionItem(e){
    
    e.preventDefault();
    this.actionItems.push(this.item);
  }

  getFocus(){
    debugger
    this.item='';
    
    document.getElementById('txt1').focus();
  }

 
}
