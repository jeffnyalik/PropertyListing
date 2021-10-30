import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { TabsetComponent } from 'ngx-bootstrap/tabs';

import { Property } from '../../../models/properties/Property';


@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('formTabs')
  formTabs!: TabsetComponent;
  propertyView: Property = {
    id: 0,
    name: '',
    price: 0,
    type: '',
    sellRent: 0,
    city: ''
  }
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    console.log("form submitted");
    console.log(form);
  }

  selectTab(tabId: number) {
    if (this.formTabs.tabs[tabId]) {
      this.formTabs.tabs[tabId].active = true;
    }
  }

}
