import { Routes } from '@angular/router';
import { DonutsComponent } from './components/donuts/donuts.component';
import { CartComponent } from './components/cart/cart.component';
import { DetailsComponent } from './components/details/details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    //Home
    {path:"", redirectTo: "/donuts", pathMatch: "full"},
    {path:"donuts", component: DonutsComponent},
    {path:"cart", component: CartComponent},
    {path:"donuts/:id", component: DetailsComponent},
    {path:"**", component: NotFoundComponent}
];
