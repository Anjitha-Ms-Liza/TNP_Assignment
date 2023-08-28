import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { FiletrComponent } from './filetr/filetr.component';
import { ModelsComponent } from './models/models.component';


const routes: Routes = [
  {path:"",component:ModelsComponent}
  //{path:"",component:ParentComponent}
  // {path:"",component:FiletrComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
