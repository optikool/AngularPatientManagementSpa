import { createAction, props } from "@ngrx/store";
import { PatientProfile } from "../../types/patient";

export enum PatientActionTypes {
  LOAD_PATIENTS = '[Patient List Component] Load Patients',
  LOAD_PATIENTS_SUCCESS = '[Patient Effect] Load Patients Success',
  LOAD_PATIENTS_FAILURE = '[Patient Effect] Load Patients Failure',
  LOAD_PATIENT = '[Patient List Component] Load Patient',
  LOAD_PATIENT_SUCCESS = '[Patient Effect] Load Patient Success',
  LOAD_PATIENT_FAILURE = '[Patient Effect] Load Patient Failure',
  CREATE_PATIENT = '[Patient Create] Create Patient',
  CREATE_PATIENT_SUCCESS = '[Patient Create Success] Create Patient Success',
  CREATE_PATIENT_FAILURE = '[Patient Create Failure] Create Patient Failure',
  UPDATE_PATIENT = '[Patient Update] Update Patient',
  UPDATE_PATIENT_SUCCESS = '[Patient Update Success] Update Patient Success',
  UPDATE_PATIENT_FAILURE = '[Patient Update Failure] Update Patient Failure',
  DELETE_PATIENT = '[Patient Delete] Delete Patient',
  DELETE_PATIENT_SUCCESS = '[Patient Delete Success] Delete Patient Success',
  DELETE_PATIENT_FAILURE = '[Patient Delete Failure] Delete Patient Failure',
  LOAD_CLINICS = '[Load Clinics] Load Clinics',
  LOAD_CLINICS_SUCCESS = '[Load Clinics Success] Load Clinics Success',
  LOAD_CLINICS_FAILURE = '[Load Clinics Failure] Load Clinics Failure',
}

export const loadPatients = createAction(
  PatientActionTypes.LOAD_PATIENTS
);

export const loadPatientsSuccess = createAction(
  PatientActionTypes.LOAD_PATIENTS_SUCCESS,
  props<{ patients: PatientProfile[] }>()
);

export const loadPatientsFailure = createAction(
  PatientActionTypes.LOAD_PATIENTS_FAILURE,
  props<{ error: any }>()
);

export const loadPatient = createAction(
  PatientActionTypes.LOAD_PATIENT,
  props<{ id: number }>()
);

export const loadPatientSuccess = createAction(
  PatientActionTypes.LOAD_PATIENT_SUCCESS,
  props<{ patient: PatientProfile }>()
);

export const loadPatientFailure = createAction(
  PatientActionTypes.LOAD_PATIENT_FAILURE,
  props<{ error: any }>()
);

export const createPatient = createAction(
  PatientActionTypes.CREATE_PATIENT,
  props<{ patient: PatientProfile }>()
);

export const createPatientSuccess = createAction(
  PatientActionTypes.CREATE_PATIENT_SUCCESS,
  props<{ patients: PatientProfile[] }>()
);

export const createPatientFailure = createAction(
  PatientActionTypes.CREATE_PATIENT_FAILURE,
  props<{ error: any }>()
);

export const updatePatient = createAction(
  PatientActionTypes.UPDATE_PATIENT,
  props<{ patient: PatientProfile }>()
);

export const updatePatientSuccess = createAction(
  PatientActionTypes.UPDATE_PATIENT_SUCCESS,
  props<{ patients: PatientProfile[] }>()
);

export const updatePatientFailure = createAction(
  PatientActionTypes.UPDATE_PATIENT_FAILURE,
  props<{ error: any }>()
);

export const deletePatient = createAction(
  PatientActionTypes.DELETE_PATIENT,
  props<{ id: number }>()
);

export const deletePatientSuccess = createAction(
  PatientActionTypes.DELETE_PATIENT_SUCCESS,
  props<{ patients: PatientProfile[] }>()
);

export const deletePatientFailure = createAction(
  PatientActionTypes.DELETE_PATIENT_FAILURE,
  props<{ error: any }>()
);

export const loadClinicsSuccess = createAction(
  PatientActionTypes.DELETE_PATIENT_SUCCESS,
  props<{ medicalClinics  }>()
);

export const loadClinicsFailure = createAction(
  PatientActionTypes.DELETE_PATIENT_FAILURE,
  props<{ error: any }>()
);
