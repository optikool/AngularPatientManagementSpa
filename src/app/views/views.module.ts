import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientListComponent } from './patient-list/patient-list.component';
import { MaterialsModule } from '../core/materials/materials.module';
import { CoreModule } from '../core/core.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    PatientListComponent
  ],
  imports: [
    CommonModule,
    MaterialsModule,
    CoreModule,
    FlexLayoutModule
  ]
})
export class ViewsModule { }
