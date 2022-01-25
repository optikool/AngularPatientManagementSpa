import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router, RouterEvent } from '@angular/router';
import { provideMockStore } from '@ngrx/store/testing';
import { ReplaySubject } from 'rxjs';
import { initialState } from '../../core/store/patient';
import { MaterialsModule } from '../../core/materials/materials.module';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let el: DebugElement;
  let routerMock: any;

  beforeEach(waitForAsync(() => {
    const routerEventRelaySubject = new ReplaySubject<RouterEvent>(1);
    routerMock = {
      events: routerEventRelaySubject.asObservable(),
      navigate:  jasmine.createSpy()
    };


    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent,
      ],
      imports: [
        MaterialsModule,
      ],
      providers: [
        provideMockStore({ initialState }),
        { provide: Router, useValue: routerMock },
      ]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(HeaderComponent);
      component = fixture.componentInstance;
      el = fixture.debugElement;
    });
  }));

  it('should create HeaderComponent', () => {
    expect(component).toBeTruthy();
  });
});
