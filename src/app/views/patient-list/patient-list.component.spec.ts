import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { provideMockStore } from '@ngrx/store/testing';
import { initialState } from '../../core/store/patient';
import { PatientService } from '../../core/services/patient.service';
import { PatientListComponent } from './patient-list.component';
import { MaterialsModule } from '../../core/materials/materials.module';

describe('PatientListComponent', () => {
  let component: PatientListComponent;
  let fixture: ComponentFixture<PatientListComponent>;
  let el: DebugElement;

  beforeEach(waitForAsync(() => {
    const patientService = {
    } as unknown as PatientService;

    TestBed.configureTestingModule({
      declarations: [PatientListComponent],
      imports: [MaterialsModule],
      providers: [
        { provide: MatDialogRef, useValue: {} },
	      { provide: MAT_DIALOG_DATA, useValue: [] },
        { provide: PatientService, useValue: patientService},
        provideMockStore({ initialState }),
      ]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(PatientListComponent);
      component = fixture.componentInstance;
      el = fixture.debugElement;
    });
  }));

  it('should create PatientListComponent', () => {
    expect(component).toBeTruthy();
  });
});

