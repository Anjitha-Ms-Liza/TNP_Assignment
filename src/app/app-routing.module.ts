import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModelsComponent } from './models/models.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { CustomizationComponent } from './customization/customization.component';


const routes: Routes = [
  {path:"",component:ModelsComponent},
  {path:"vehicles",component:VehiclesComponent},
  {path:"car-details",component:CarDetailsComponent},
  {path:"car-build",component:CustomizationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
