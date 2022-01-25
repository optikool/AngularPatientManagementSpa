import { TestBed, waitForAsync } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { Observable } from 'rxjs';
import { initialState } from '.';
import { PatientService } from '../../services/patient.service';

import { PatientEffects } from './patient.effects';

describe('PatientEffects', () => {
  let actions$: Observable<any>;
  let effects: PatientEffects;
  const patientService = {
  } as unknown as PatientService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [],
      providers: [
        PatientEffects,
        provideMockActions(() => actions$),
        provideMockStore({ initialState }),
        { provide: MatDialogRef, useValue: {} },
	      { provide: MAT_DIALOG_DATA, useValue: [] },
        { provide: PatientService, useValue: patientService},
      ]
    })
    .compileComponents()
    .then(() => {
      effects = TestBed.inject(PatientEffects)
    });
  }));

  it('should create PatientEffects', () => {
    expect(effects).toBeTruthy();
  });
});
