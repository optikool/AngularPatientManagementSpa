import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { provideMockStore } from '@ngrx/store/testing';
import { MaterialsModule } from '../../materials/materials.module';
import { initialState } from '../../store/patient';

import { PatientCardComponent } from './patient-card.component';

describe('PatientCardComponent', () => {
  let component: PatientCardComponent;
  let fixture: ComponentFixture<PatientCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PatientCardComponent],
      imports: [MaterialsModule],
      providers: [
        provideMockStore({ initialState }),
        { provide: MatDialog, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
	      { provide: MAT_DIALOG_DATA, useValue: [] }
      ],
    }).compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(PatientCardComponent);
      component = fixture.componentInstance;
    });
  }));

  it('should create PatientCardComponent', () => {
    expect(component).toBeTruthy();
  });
});
