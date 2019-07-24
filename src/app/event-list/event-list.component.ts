import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  add_event_form;

  constructor(
  	private formBuilder: FormBuilder,
  	) {
  		this.add_event_form = this.formBuilder.group({
  			title: ['', Validators.required],
  			start_date: ['', Validators.required],
  			start_time: '',
  			end_date: ['', Validators.required],
  			end_time: '',
  			all_day: [false],
  			location: ['', Validators.required],
  			email: ['', Validators.required],
  			description: ['', Validators.required],
  			id: '',

  			guest_list: this.formBuilder.array([
			    this.formBuilder.control('')
			])
  		});

  		if (localStorage.getItem("key") === null){
  			localStorage.setItem("key", 0);
  		}
  	}

  	addGuest() {
	  this.guest_list.push(this.formBuilder.control(''));
	}

	get guest_list() {
	  return this.add_event_form.get('guest_list') as FormArray;
	}

	removeGuest(i: number){
		this.add_event_form.controls.guest_list.removeAt(i);
	}

  ngOnInit() {
  	
  }

  onSubmit(customerData) {
    console.warn('Your order has been submitted', customerData);

    if(customerData.all_day == true){
    	customerData.start_time = null;
    	customerData.end_time = null;
    }
    let key = localStorage.getItem("key");
    key++;
    customerData.id = key;
    let serializedForm = JSON.stringify(customerData);

    localStorage.setItem(key, serializedForm);
    localStorage.setItem("key", key);
 
    this.add_event_form.reset();

    alert('Event added Successfully!');

    window.location = '';
  }

}
