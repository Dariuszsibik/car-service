import {NgModule} from "@angular/core";
import {RouterModule, Route} from "@angular/router";
import {CarDetailsComponent} from "./car-details/car-details.component";
import {CarResolve} from "./car-resolve.service";
import { AuthGuard } from "../auth/auth.guard";
import { CarsListComponent } from "./cars-list/cars-list.component";
import { CarsComponent } from "./cars.component";


const CARS_ROUTES : Route[] = [

  {
    path: '',
    component: <any>CarsComponent,
    children: [
      {
        path: '',
        component: <any>CarsListComponent
      },
      {
        path: ':id',
        component: <any>CarDetailsComponent,
        resolve: { car: CarResolve },
      }
    ]
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(CARS_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})

export class CarsRoutingModule {}
