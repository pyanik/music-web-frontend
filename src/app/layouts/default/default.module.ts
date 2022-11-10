import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenreComponent } from 'src/app/modules/genre/genre.component';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { DefaultComponent } from './default.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from 'src/app/modules/login/login.component';



@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    GenreComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule
  ]
})
export class DefaultModule { }
