import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PatientProfile, PatientProfileFlat } from 'src/app/core/types/patient';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.scss']
})
export class PatientFormComponent implements OnInit {
  @Input() public patientProfile: PatientProfile;

  public controlsConfig: PatientProfileFlat;
  public registerForm: FormGroup;
  public createUpdate: string = 'Create';

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.registerForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      street: [''],
      city: [''],
      state: [''],
      zipCode: [''],
      clinic: [''],
      description: ['']
    });

    this.controlsConfig = {
      id: null,
      name: '',
      street: '',
      city: '',
      state: '',
      zipCode: '',
      clinic: '',
      description: ''
    };

    this.patientProfile = {
      id: null,
      name: '',
      address: {
        street: '',
        city: '',
        state: '',
        zipCode: ''
      },
      clinic: '',
      description: ''
    };
  }

  ngOnInit(): void {
    this.controlsConfig = {
      id: this.patientProfile.id,
      name: this.patientProfile.name,
      street: this.patientProfile.address.street,
      city: this.patientProfile.address.city,
      state: this.patientProfile.address.state,
      zipCode: this.patientProfile.address.zipCode,
      clinic: this.patientProfile.clinic,
      description: this.patientProfile.description
    };

    this.registerForm.reset(this.controlsConfig);
  }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      return;
    }
  }

  onCancel(): void {

  }

  get f() { return this.registerForm && this.registerForm.controls; }
}
