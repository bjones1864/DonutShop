import { Component } from '@angular/core';
import { DonutsService } from '../../services/donuts.service';
import { DonutModel, Result } from '../../models/donut-model';
import { DetailsComponent } from '../details/details.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-donuts',
  standalone: true,
  imports: [DetailsComponent, RouterLink],
  templateUrl: './donuts.component.html',
  styleUrl: './donuts.component.css'
})
export class DonutsComponent {
  constructor(private _donutsService: DonutsService){}

  allDonuts: DonutModel = {} as DonutModel;

  ngOnInit():void{
    this.callAPI();
  }

  callAPI(): void{
    this._donutsService.getDonuts().subscribe((response: DonutModel) => {
      console.log(response);
      this.allDonuts = response;
    })
  }
}
