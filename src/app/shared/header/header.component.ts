import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { PatientService } from '../..//core/services/patient.service';
import { PatientProfile } from '../../core/types/patient';

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
  constructor(private patientService: PatientService) {}

  ngOnInit(): void {
  }

  loadNewProfile(): void {
    console.log('loadNewProfile was called');
    this.patientService.openModalDialog(this.patientProfile, 'new')
      .subscribe(result => {
        console.log('Result from loadNewProfile: ', result);
      });
  }
}
