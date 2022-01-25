import { TestBed, waitForAsync } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PatientService } from './patient.service';
import { StoreService } from './store.service';

describe('StoreService', () => {
  let service: StoreService;
  const patientService = {
  } as unknown as PatientService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        StoreService,
        { provide: MatDialogRef, useValue: {} },
	      { provide: MAT_DIALOG_DATA, useValue: [] },
        { provide: PatientService, useValue: patientService}
      ],
    }).compileComponents()
    .then(() => {
      service = TestBed.inject(StoreService);
    });
  }));

  it('should create StoreService', () => {
    expect(service).toBeTruthy();
  });
});
