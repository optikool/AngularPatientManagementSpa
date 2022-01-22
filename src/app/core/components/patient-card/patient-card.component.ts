import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-card',
  templateUrl: './patient-card.component.html',
  styleUrls: ['./patient-card.component.scss']
})
export class PatientCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  loadProfile(): void {
    console.log('loadProfile called');
  }
}
