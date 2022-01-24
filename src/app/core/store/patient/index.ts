import { createReducer, MetaReducer, on } from '@ngrx/store';
import { environment } from '../../../../environments/environment';
import { PatientProfile } from '../../types/patient';
import * as fromPatientActions from './patient.actions';

export const patientStateFeatureKey = 'patientState';

export interface PatientState {
  patients: PatientProfile[];
  patient: PatientProfile;
  error?: any;
}

export const initialState: PatientState = {
  patients: [],
  patient: {
    id: null,
    name: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    clinic: '',
    description: '',
  },
  error: undefined
};

export const reducers = createReducer(
  initialState,
  // on(fromPatientActions.loadPatients, (state: PatientState, action) => {
  //   console.log('reducers loadPatients action: ', action);
  //   console.log('reducers loadPatients state: ', state);
  //   return {
  //     ...state,
  //     //patients: action.patients
  //   }
  // }),
  on(fromPatientActions.loadPatientSuccess, (state: PatientState, action) => {
    console.log('loadPatientSuccess state: ', state);
    console.log('loadPatientSuccess action: ', action);
    return {
      ...state,
      patient: action.patient
    }
  }),
  on(fromPatientActions.loadPatientsSuccess, (state: PatientState, action) => {
    console.log('loadPatientsSuccess state: ', state);
    console.log('loadPatientsSuccess action: ', action);
    return {
      ...state,
      patients: action.patients
    }
  }),
  on(fromPatientActions.loadPatientsFailure, (state, action) => {
    return {
      ...state,
      error: action.error
    }
  }),
  on(fromPatientActions.createPatientSuccess, (state: PatientState, action) => {
    return {
      ...state,
      patients: action.patients
    }
  }),
  on(fromPatientActions.createPatientFailure, (state: PatientState, action) => {
    return {
      ...state,
      error: action.error
    }
  }),
  on(fromPatientActions.updatePatientSuccess, (state: PatientState, action) => {
    return {
      ...state,
      patients: action.patients
    }
  }),
  on(fromPatientActions.updatePatientFailure, (state: PatientState, action) => {
    return {
      ...state,
      error: action.error
    }
  }),
  on(fromPatientActions.deletePatientSuccess, (state: PatientState, action) => {
    return {
      ...state,
      patients: action.patients
    }
  }),
  on(fromPatientActions.deletePatientFailure, (state: PatientState, action) => {
    return {
      ...state,
      error: action.error
    }
  })
);

export const metaReducers: MetaReducer<PatientState>[] = !environment.production ? [] : [];
