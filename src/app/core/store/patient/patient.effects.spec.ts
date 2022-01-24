import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { PatientEffects } from './patient.effects';

describe('CharacterEffects', () => {
  let actions$: Observable<any>;
  let effects: PatientEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PatientEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(PatientEffects);
  });

  it('should be created', () => {
    pending();
    expect(effects).toBeTruthy();
  });
});
