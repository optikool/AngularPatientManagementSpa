import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { select, Store } from '@ngrx/store';
import * as fromActions from '../../core/store/patient/patient.actions';
import { PatientState } from '../../core/store/patient';
import { selectPatients } from '../../core/store/patient/patient.selectors';

@Injectable({
  providedIn: 'root'
})
export class PatientListResolver implements Resolve<string> {
  constructor(
    private readonly store: Store<PatientState>
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string> {
    this.store.dispatch(fromActions.loadPatients());
    return of('NONE');
  }
}
