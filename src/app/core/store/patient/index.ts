import { createReducer, MetaReducer, on } from '@ngrx/store';
import { environment } from '../../../../environments/environment';
import { PatientProfile } from '../../types/patient';
import * as fromPatientActions from './patient.actions';

export const patientStateFeatureKey = 'patientState';

export interface PatientState {
  patients: PatientProfile[];
  patient: PatientProfile;
  medicalClinics: any;
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
  medicalClinics: {},
  error: undefined
};

export const reducers = createReducer(
  initialState,
  on(fromPatientActions.loadPatientSuccess, (state: PatientState, action) => {
    return {
      ...state,
      patient: action.patient
    }
  }),
  on(fromPatientActions.loadPatientsSuccess, (state: PatientState, action) => {
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
  }),
  on(fromPatientActions.loadClinicsSuccess, (state, action) => {
    return {
      ...state,
      medicalClinics: action.medicalClinics
    }
  }),
  on(fromPatientActions.loadClinicsFailure, (state, action) => {
    return {
      ...state,
      error: action.error
    }
  })
);

export const metaReducers: MetaReducer<PatientState>[] = !environment.production ? [] : [];
