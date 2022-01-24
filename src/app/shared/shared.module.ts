import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MaterialsModule } from '../core/materials/materials.module';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MaterialsModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class SharedModule { }
