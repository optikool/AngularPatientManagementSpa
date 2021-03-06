import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { PatientProfile } from '../types/patient';
import { PatientService } from './patient.service';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private patients: PatientProfile[] = [];
  private availablePatientId = 0;
  private clinics = {};

  constructor(private patientService: PatientService) {}

  getPatient(action: { id: number; type: string }): Observable<PatientProfile> {
    const patient = this.patients.find(
      (patient: PatientProfile) => action.id === patient.id
    );

    if (patient) {
      return of({
        ...patient,
      });
    } else {
      return throwError(() => 'Patient not found');
    }
  }

  getPatients(): Observable<PatientProfile[]> {
    this.patients = this.patientService.loadPatients();
    this.availablePatientId = this.patients.length;

    if (this.patients.length > 0) {
      return of(this.patients);
    } else {
      return throwError(() => 'No Patients found');
    }
  }

  getClinics(): Observable<any> {
    this.clinics = this.patientService.loadClinics();

    return of(this.clinics);
  }

  createPatient(patient: PatientProfile): Observable<PatientProfile[]> {
    const newPatient = {
      ...patient,
      id: this.availablePatientId,
    };

    this.availablePatientId++;
    this.patients = this.patients.concat(newPatient);

    return of(this.patients);
  }

  updatePatient(data: PatientProfile): Observable<PatientProfile[]> {
    this.patients = this.patients.map((patient) => {
      if (data.id !== patient.id) return patient;
      return {
        ...patient,
        ...data,
      };
    });

    return of(this.patients);
  }

  deletePatient(action: { id: number; type: string }): Observable<PatientProfile[]> {
    this.patients = this.patients.filter(
      (patient: PatientProfile) => patient.id !== action.id
    );

    return of(this.patients);
  }
}
