import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//rotas
import { RoutingModule } from './routing.module';
//component
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
//share
import { SharedModule } from '../shared/shared.module';





@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent

  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
