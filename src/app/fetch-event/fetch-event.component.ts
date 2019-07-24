import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fetch-event',
  templateUrl: './fetch-event.component.html',
  styleUrls: ['./fetch-event.component.css']
})
export class FetchEventComponent implements OnInit {
	events = [];
  
  constructor() { }

  ngOnInit() {
  	for (let i = 0; i < localStorage.length; i++){
	  let key = localStorage.key(i);
	  let value = localStorage.getItem(key);
	  
	  if (key !== "key"){
	  	this.events.push(JSON.parse(value));
	  }
	  
	  console.log(this.events);
	}	
  }

  deleteEvent(i: number): void{
  	console.log('Got item' + i);
  	localStorage.removeItem(i+"");
  	location.reload();
  }

}
