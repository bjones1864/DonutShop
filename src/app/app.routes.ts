import { Routes } from '@angular/router';
import { DonutsComponent } from './components/donuts/donuts.component';
import { CartComponent } from './components/cart/cart.component';
import { DetailsComponent } from './components/details/details.component';

export const routes: Routes = [
    //Home
    {path:"", component: DonutsComponent},
    {path:"cart", component: CartComponent},
    {path:":id", component: DetailsComponent},
];
