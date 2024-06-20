import { Component } from '@angular/core';
import { DonutsService } from '../../services/donuts.service';
import { DonutDetails } from '../../models/donut-details';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  constructor(private _donutsService: DonutsService){}

  getCart():DonutDetails[]{
    return this._donutsService.getCart();
  }

  removeFromCart(d: DonutDetails):void{
    this._donutsService.removeFromCart(d);
  }

  resetCart():void{
    this._donutsService.resetCart();
  }

  getTotalCalories():number{
    return this._donutsService.getTotalCalories();
  }

  getCartDistict(): DonutDetails[]{
    let map = new Map(this._donutsService.getCart().map(pos => [pos.id, pos]));
    return [...map.values()];
  }

  getItemQuantity(d: DonutDetails): number {
    return this._donutsService.getCart().reduce((total:number, current:DonutDetails) => current == d ? total + 1 : total, 0);
  }


}
