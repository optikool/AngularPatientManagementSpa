import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientCardComponent } from './components/patient-card/patient-card.component';
import { MaterialsModule } from './materials/materials.module';

@NgModule({
  declarations: [
    PatientCardComponent
  ],
  imports: [
    CommonModule,
    MaterialsModule
  ],
  exports: [
    PatientCardComponent
  ]
})
export class CoreModule { }
