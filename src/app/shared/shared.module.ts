import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { FlexModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import { AppModule } from '../app.module';
import { AppComponent } from '../app.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexModule,
    MaterialModule,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    MaterialModule,
  ]
})
export class SharedModule { }
