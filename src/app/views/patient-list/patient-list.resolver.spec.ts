import { TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRouteSnapshot, convertToParamMap, RouterStateSnapshot } from '@angular/router';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { PatientService } from '../../core/services/patient.service';
import { initialState } from '../../core/store/patient';
import { PatientListResolver } from './patient-list.resolver';

describe('CharactersResolver', () => {
  let patientListResolver: PatientListResolver;
  let store: MockStore;
  let route: ActivatedRouteSnapshot;
  let state: RouterStateSnapshot;
  let patientService: PatientService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [
        PatientService,
        provideMockStore({ initialState }),
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
      store.setState({
        patients: patientService.loadPatients()
      });
      store.refreshState();
    });
  }));

  it('should be created', () => {
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
