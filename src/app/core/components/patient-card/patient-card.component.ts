import { Component, Input, OnInit } from '@angular/core';
import { PatientProfile } from '../../types/patient';

@Component({
  selector: 'app-patient-card',
  templateUrl: './patient-card.component.html',
  styleUrls: ['./patient-card.component.scss'],
})
export class PatientCardComponent implements OnInit {
  @Input() public patientProfile: PatientProfile;
  @Input() public isFullProfile = true;

  
  constructor() {
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

  ngOnInit(): void {}

  loadProfile(): void {
    console.log('loadProfile called id: ', this.patientProfile.id);
  }
}
