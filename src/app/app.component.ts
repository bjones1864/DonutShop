import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DonutsComponent } from './components/donuts/donuts.component';
import { DonutsService } from './services/donuts.service';
import { DonutDetails } from './models/donut-details';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, DonutsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private _donutsService: DonutsService){}

  title = 'DonutShop';

  getCart():DonutDetails[]{
    return this._donutsService.getCart();
  }
}
