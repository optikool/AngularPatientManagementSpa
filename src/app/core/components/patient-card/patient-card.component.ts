import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PatientService } from '../../services/patient.service';
import { PatientState } from '../../store/patient';
import { PatientProfile } from '../../types/patient';
import * as fromActions from '../../store/patient/patient.actions';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-patient-card',
  templateUrl: './patient-card.component.html',
  styleUrls: ['./patient-card.component.scss'],
})
export class PatientCardComponent implements OnInit {
  @Input() public patientProfile: PatientProfile;
  @Input() public isFullProfile = true;
  @Input() public medicalClinics;

  public clinicName = '';
  private ngOnDestroy$ = new Subject();

  constructor(
    private patientService: PatientService,
    private readonly store: Store<PatientState>
  ) {

    this.patientProfile = {
      id: 0,
      name: '',
      street: '',
      city: '',
      state: '',
      zipCode: '',
      clinic: '',
      description: '',
    };
  }

  ngOnInit(): void {
    this.clinicName = this.medicalClinics[this.patientProfile.clinic];
  }

  ngOnDestroy(): void {
    this.ngOnDestroy$.next(true);
    this.ngOnDestroy$.complete();
  }

  getClinic(abv: string): string {
    return this.medicalClinics[abv];
  }

  loadProfile(): void {
    this.patientService.openModalDialog(this.patientProfile, 'view')
      .pipe(takeUntil(this.ngOnDestroy$))
      .subscribe(result => {
        if (result) {
          if (result.delete) {
            this.store.dispatch(fromActions.deletePatient({id: result.payload.id}));
          } else {
            this.store.dispatch(fromActions.updatePatient(result.payload));
          }
        }
      });
  }
}
