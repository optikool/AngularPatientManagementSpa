import { TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRouteSnapshot, convertToParamMap, RouterStateSnapshot } from '@angular/router';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { PatientService } from '../../core/services/patient.service';
import { initialState } from '../../core/store/patient';
import { PatientListResolver } from './patient-list.resolver';

describe('PatientListResolver', () => {
  let patientListResolver: PatientListResolver;
  let store: MockStore;
  let route: ActivatedRouteSnapshot;
  let state: RouterStateSnapshot;

  const patientService = {
    loadPatients: jasmine.createSpy()
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [
        PatientService,
        provideMockStore({ initialState }),
        { provide: PatientService, useValue: patientService},
        { provide: ActivatedRouteSnapshot, useValue: { snapshot: { paramMap: convertToParamMap({ id: 1 }) }}},
        { provide: RouterStateSnapshot, useValue: { snapshot: { url: '' }}},
      ]
    })
    .compileComponents()
    .then(() => {
      patientListResolver = TestBed.inject(PatientListResolver);
      route = TestBed.inject(ActivatedRouteSnapshot);
      state = TestBed.inject(RouterStateSnapshot);
      store = TestBed.inject(MockStore);
    });
  }));

  it('should create PatientListResolver', () => {
    expect(patientListResolver).toBeTruthy();
  });

  it('should call store dispach', () => {
    spyOn(store, 'dispatch');
    patientListResolver.resolve(route, state);
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });

  it('should return NONE Observable', () => {
    patientListResolver.resolve(route, state).subscribe(result => {
      expect(result).toEqual('NONE');
    });
  });
});
