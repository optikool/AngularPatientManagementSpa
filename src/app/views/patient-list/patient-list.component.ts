import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { PatientProfile } from '../../core/types/patient';
import * as patientSelectors from '../../core/store/patient/patient.selectors';
import { PatientService } from '../../core/services/patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {
  public patientList = this.store.pipe(select(patientSelectors.selectPatients));
  public medicalClinics;

  constructor(
    private patientService: PatientService,
    private readonly store: Store<PatientProfile>
  ) {
  }

  ngOnInit(): void {
    this.medicalClinics = this.patientService.loadClinics();
  }

}
