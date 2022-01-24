import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PatientActionTypes }  from './patient.actions';
import * as fromPatientActions from './patient.actions';
import { StoreService } from '../../services/store.service';
import { of } from 'rxjs';
import { mergeMap, map, catchError, withLatestFrom, exhaustMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { PatientState } from './index';
import { selectPatients } from './patient.selectors';
import { PatientProfile } from '../../types/patient';

@Injectable()
export class PatientEffects {
  constructor(
    private actions$: Actions,
    private store$: Store<PatientState>,
    private storeService: StoreService
  ) {}

  loadPatients$ = createEffect(() => this.actions$.pipe(
    ofType(PatientActionTypes.LOAD_PATIENTS),
    mergeMap(() => this.storeService.getPatients()
      .pipe(
          mergeMap(patients => {
            console.log('Load Patiends Effect: ', patients);
            return [
              fromPatientActions.loadPatientsSuccess({patients})
            ];
          }),
          catchError(error => of(fromPatientActions.loadPatientsFailure({error})))
      )
    )
  ));

  loadPatient$ = createEffect(() => this.actions$.pipe(
    ofType(PatientActionTypes.LOAD_PATIENT),
    mergeMap((action) => this.storeService.getPatient(action)
      .pipe(
        map(patient => fromPatientActions.loadPatientSuccess({patient})),
        catchError(error => of(fromPatientActions.loadPatientFailure({error})))
      )
    )
  ));

  createPatient$ = createEffect(() => this.actions$.pipe(
    ofType(PatientActionTypes.CREATE_PATIENT),
    mergeMap((patient: PatientProfile) => this.storeService.createPatient(patient)
      .pipe(
        map(patients => fromPatientActions.createPatientSuccess({patients})),
        catchError(error => of(fromPatientActions.createPatientFailure({error})))
      ))
  ));

  updatePatient$ = createEffect(() => this.actions$.pipe(
    ofType(PatientActionTypes.UPDATE_PATIENT),
    mergeMap((patient: PatientProfile) => this.storeService.updatePatient(patient)
      .pipe(
        map(patients => fromPatientActions.updatePatientSuccess({patients})),
        catchError(error => of(fromPatientActions.updatePatientFailure({error})))
      ))
  ));

  deletePatient$ = createEffect(() => this.actions$.pipe(
    ofType(PatientActionTypes.DELETE_PATIENT),
    mergeMap((data) => this.storeService.deletePatient(data)
      .pipe(
        map(patients => fromPatientActions.deletePatientSuccess({patients})),
        catchError(error => of(fromPatientActions.deletePatientFailure({error})))
      ))
  ));
}
