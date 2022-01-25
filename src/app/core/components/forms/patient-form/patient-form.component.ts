import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PatientProfile } from '../../../types/patient';
import { PatientService } from '../../../services/patient.service';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.scss'],
})
export class PatientFormComponent implements OnInit {
  @Input() public patientProfile: PatientProfile;
  @Input() public isNew: boolean;

  public controlsConfig: PatientProfile;
  public registerForm: FormGroup;
  public createUpdate: string;
  public isEditable: boolean = false;
  public header: string = '';
  public medicalClinics;
  public clinicName = '';
  public clinicsSelectList;


  constructor(
    private patientService: PatientService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<PatientFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
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
    this.medicalClinics = this.patientService.loadClinics();
    this.createUpdate = this.data.type === 'new' ? 'Create' : this.data.type === 'view' ? 'Edit' : 'Update';
    this.patientProfile = this.data.patientProfile;
    this.clinicName = this.medicalClinics[this.patientProfile.clinic];
    this.clinicsSelectList = this.patientService.getFomrattedClinics();
    this.controlsConfig = {
      id: this.data.patientProfile.id,
      name: this.data.patientProfile.name,
      street: this.data.patientProfile.street,
      city: this.data.patientProfile.city,
      state: this.data.patientProfile.state,
      zipCode: this.data.patientProfile.zipCode,
      clinic: this.data.patientProfile.clinic,
      description: this.data.patientProfile.description,
    };

    this.registerForm.reset(this.controlsConfig);
    this.isEditable = this.data.type === 'view' ? false : true;
  }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      return;
    }

    if (this.isEditable) {
      this.dialogRef.close({payload: this.registerForm.value, delete: false});
    } else {
      this.createUpdate = 'Update';
      this.isEditable = true;
    }
  }

  onDelete(): void {
    this.dialogRef.close({payload: this.registerForm.value, delete: true});
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }

  get f() {
    return this.registerForm && this.registerForm.controls;
  }
}
