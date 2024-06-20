import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DonutModel } from '../models/donut-model';
//import { HttpClient } from '@angular/common/http';
import { DonutDetails } from '../models/donut-details';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DonutsService {

  constructor(private http:HttpClient) { }

  getDonuts(): Observable<DonutModel>{
    return this.http.get<DonutModel>("https://grandcircusco.github.io/demo-apis/donuts.json");
  }

  getById(id: number): Observable<DonutDetails>{
    return this.http.get<DonutDetails>(`https://grandcircusco.github.io/demo-apis/donuts/${id}.json`);
  }

  cart: DonutDetails[] = [];

  getCart():DonutDetails[]{
    return this.cart;
  }

  addToCart(d: DonutDetails):void{
    this.cart.push(d);
  }

  removeFromCart(d: DonutDetails):void{
    this.cart.splice(this.cart.findIndex(x => x.id == d.id), 1);
  }

  resetCart():void{
    this.cart = [];
  }

  getCartLength():number{
    return this.cart.length;
  }
}