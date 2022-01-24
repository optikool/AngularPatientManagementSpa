import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { PatientProfile } from '../../core/types/patient';
import * as patientSelectors from '../../core/store/patient/patient.selectors';
import * as fromActions from '../../core/store/patient/patient.actions';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {
  public patientList: PatientProfile[] = []; //this.store.pipe(select(patientSelectors.selectPatients)) // []; // = this.store.dispatch(select(selectPatients));

  constructor(
    private store: Store<PatientProfile>
  ) {
  }

  ngOnInit(): void {
    console.log('PatientListComponent initialized');
    this.store.pipe(select(patientSelectors.selectPatients))
      .subscribe(data => {
        console.log('PatientListComponent data: ', data);
        this.patientList = data;
      });
    // this.store.dispatch(fromActions.loadPatients());

  }

}
