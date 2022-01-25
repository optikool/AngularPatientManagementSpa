import { TestBed, waitForAsync } from '@angular/core/testing';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { PatientService } from './patient.service';

describe('PatientService', () => {
  let service: PatientService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        { provide: MatDialog, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
	      { provide: MAT_DIALOG_DATA, useValue: [] }
      ],
    }).compileComponents()
    .then(() => {
      service = TestBed.inject(PatientService);
    });
  }));

  it('should create PatientService', () => {
    expect(service).toBeTruthy();
  });
});
