import { Component, OnInit } from '@angular/core';
import { PatientState } from '../../core/store/patient';
import { PatientService } from '../..//core/services/patient.service';
import { PatientProfile } from '../../core/types/patient';
import { Store } from '@ngrx/store';
import * as fromActions from '../../core/store/patient/patient.actions';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private patientProfile: PatientProfile = {
    id: null,
    name: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    clinic: '',
    description: '',
  };
  private ngOnDestroy$ = new Subject();

  constructor(
    private patientService: PatientService,
    private readonly store: Store<PatientState>) {}

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.ngOnDestroy$.next(true);
    this.ngOnDestroy$.complete();
  }

  loadNewProfile(): void {
    this.patientService.openModalDialog(this.patientProfile, 'new')
      .pipe(takeUntil(this.ngOnDestroy$))
      .subscribe(result => {
        if (result) {
          this.store.dispatch(fromActions.createPatient(result.payload))
        }
      });
  }
}
