import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { PatientProfile } from '../../core/types/patient';
import * as patientSelectors from '../../core/store/patient/patient.selectors';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {
  public patientList = this.store.pipe(select(patientSelectors.selectPatients));

  constructor(
    private store: Store<PatientProfile>
  ) {
  }

  ngOnInit(): void {

  }

}
