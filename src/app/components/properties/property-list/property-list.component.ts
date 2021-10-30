import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PropertiesService } from '../../../services/properties.service';
import { Property } from '../../../models/properties/Property';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  properties: Property[] = [];
  sellRent = 1;
  city = '';
  Today = new Date();
  constructor(private propService: PropertiesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    if(this.route.snapshot.url.toString()){
      this.sellRent = 2;
    }
    this.getProperties();
  }

  private getProperties(){
    this.propService.getProperties().subscribe((properties: Property[]) =>{
      this.properties = properties
      console.log(this.properties);
      console.log(this.route.snapshot.url.toString());
    })
  }
}
