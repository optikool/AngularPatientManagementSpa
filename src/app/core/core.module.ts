import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientCardComponent } from './components/patient-card/patient-card.component';
import { MaterialsModule } from './materials/materials.module';
import { PatientFormComponent } from './components/forms/patient-form/patient-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PatientCardComponent,
    PatientFormComponent
  ],
  imports: [
    CommonModule,
    MaterialsModule,
    ReactiveFormsModule
  ],
  exports: [
    PatientCardComponent
  ]
})
export class CoreModule { }
