import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PatientProfile } from 'src/app/core/types/patient';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.scss'],
})
export class PatientFormComponent implements OnInit {
  @Input() public patientProfile: PatientProfile;
  @Input() public isNew: boolean = false;

  public controlsConfig: PatientProfile;
  public registerForm: FormGroup;
  public createUpdate: string = this.isNew ? 'Create' : 'Update';
  public isEditable: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<PatientFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PatientProfile) {
    this.registerForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required],
      clinic: [''],
      description: [''],
    });

    this.controlsConfig = {
      id: null,
      name: '',
      street: '',
      city: '',
      state: '',
      zipCode: '',
      clinic: '',
      description: '',
    };

    this.patientProfile = {
      id: null,
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
    this.controlsConfig = {
      id: this.patientProfile.id,
      name: this.patientProfile.name,
      street: this.patientProfile.street,
      city: this.patientProfile.city,
      state: this.patientProfile.state,
      zipCode: this.patientProfile.zipCode,
      clinic: this.patientProfile.clinic,
      description: this.patientProfile.description,
    };
    console.log('this.patientProfile: ', this.patientProfile);
    console.log('this.controlsConfig: ', this.controlsConfig);
    this.registerForm.reset(this.controlsConfig);
    this.isEditable = this.isNew;
  }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      return;
    }

    this.dialogRef.close(this.registerForm.value)
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }

  get f() {
    return this.registerForm && this.registerForm.controls;
  }
}
