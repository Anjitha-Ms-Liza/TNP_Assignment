import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from "@angular/flex-layout";
import { PipesPipe } from './pipes.pipe';
import { HeaderComponent } from './header/header.component';
import { ModelsComponent } from './models/models.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { FooterComponent } from './footer/footer.component';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule} from '@angular/common/http';
import { CarDetailsComponent } from './car-details/car-details.component';
import { CustomizationComponent } from './customization/customization.component';


@NgModule({
  declarations: [
    AppComponent,
    PipesPipe,
    HeaderComponent,
    ModelsComponent,
    VehiclesComponent,
    FooterComponent,
    CarDetailsComponent,
    CustomizationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    FlexLayoutModule,
    MatToolbarModule,
    IonicModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
