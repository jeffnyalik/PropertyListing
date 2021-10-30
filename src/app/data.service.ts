import { Injectable } from "@angular/core";

import {InMemoryDbService} from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root'
})

export class DataService implements InMemoryDbService{
  constructor(){}

  createDb(){
    return {
      properties: [
        {
          "id": "1",
          "name": "Cottage",
          "type": "Rent",
          "price": "14000",
          "sellRent": 1,
          "city": "Nairobi",
          "image": "prop-4"
      },
      {
          "id": "2",
          "name": "Villa",
          "type": "Rent",
          "price": "14000",
          "sellRent": 2,
          "city": "Nairobi",
          "image": "prop-3"
      },
      {
          "id": "3",
          "name": "Apartment",
          "type": "Rent",
          "price": "14000",
          "sellRent": 1,
          "city": "Mombasa",
          "image": "prop-4"
      },
      {
          "id": "4",
          "name": "PentHouse",
          "type": "Rent",
          "price": "14000",
          "sellRent": 1,
          "city": "Nakuru",
          "image": "prop-5"
      },
      {
          "id": "5",
          "name": "Camp Tent",
          "type": "Rent",
          "price": "14000",
          "sellRent": 1,
          "city": "Kericho",
          "image": ""
      }
      ]
    };
  }
}
