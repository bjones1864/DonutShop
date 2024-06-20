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

  getCartLength():number{
    return this._donutsService.getCartLength();
  }


}
