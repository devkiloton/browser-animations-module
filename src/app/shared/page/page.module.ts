import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page.component';
import { HeaderModule } from '../header';



@NgModule({
  declarations: [PageComponent],
  exports: [PageComponent],
  imports: [
    CommonModule,
    HeaderModule
  ]
})
export class PageModule { }
