import { Component, Input } from '@angular/core';
import { DonutsService } from '../../services/donuts.service';
import { ActivatedRoute } from '@angular/router';
import { DonutDetails } from '../../models/donut-details';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  constructor(private activatedRoute: ActivatedRoute, private _donutsService: DonutsService){}
  
  id: number = 1;

  displayDonut: DonutDetails = {} as DonutDetails;

  getID(): void{
    this.activatedRoute.paramMap.subscribe((param) => {
      this.id = Number(param.get("id"));
    })
  }

  callAPI(): void{
    this._donutsService.getById(this.id).subscribe((response: DonutDetails) => {
      console.log(response);
      this.displayDonut = response;
    })
  }

  ngOnInit(): void{
    this.getID();
    this.callAPI();
  }

  addToCart():void{
    this._donutsService.addToCart(this.displayDonut);
  }
}
