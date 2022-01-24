import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientListComponent } from './patient-list/patient-list.component';
import { MaterialsModule } from '../core/materials/materials.module';
import { CoreModule } from '../core/core.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StoreModule } from '@ngrx/store';
import { PatientEffects } from '../core/store/patient/patient.effects';
import { EffectsModule } from '@ngrx/effects';
import * as fromPatientState from '../core/store/patient/index';

@NgModule({
  declarations: [
    PatientListComponent
  ],
  imports: [
    CommonModule,
    MaterialsModule,
    CoreModule,
    FlexLayoutModule,
    StoreModule.forFeature(
      fromPatientState.patientStateFeatureKey,
      fromPatientState.reducers,
      { metaReducers: fromPatientState.metaReducers }
    ),
    EffectsModule.forFeature([PatientEffects]),
  ]
})
export class ViewsModule { }
