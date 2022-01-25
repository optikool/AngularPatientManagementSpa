import * as PatientProfile from './patient.actions';

describe('PatientAction', () => {
  it('should return an action', () => {
    expect(PatientProfile.loadPatients().type).toBe('[Patient List Component] Load Patients');
  });
});
