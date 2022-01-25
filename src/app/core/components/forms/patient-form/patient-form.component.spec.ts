import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MaterialsModule } from '../../../materials/materials.module';

import { PatientFormComponent } from './patient-form.component';

describe('PatientFormComponent', () => {
  let component: PatientFormComponent;
  let fixture: ComponentFixture<PatientFormComponent>;
  const formBuilder = {
    group: jasmine.createSpy()
  }

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientFormComponent ],
      imports: [MaterialsModule],
      providers: [
        { provide: FormBuilder, useValue: formBuilder },
        { provide: MatDialog, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
	      { provide: MAT_DIALOG_DATA, useValue: [] }
      ]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(PatientFormComponent);
      component = fixture.componentInstance;
    });
  }));

  it('should create PatientFormComponent', () => {
    expect(component).toBeTruthy();
  });
});
