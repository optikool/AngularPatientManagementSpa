import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PatientState, patientStateFeatureKey } from ".";

export const selectPatientFeature = createFeatureSelector<PatientState>(
  patientStateFeatureKey
)

export const selectPatients = createSelector(
  selectPatientFeature,
  (state: PatientState) => state.patients
);

export const selectPatient = createSelector(
  selectPatientFeature,
  (state: PatientState) => state.patient
);
