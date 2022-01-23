export interface PatientAddress {
  street: string;
  city: string;
  state: string;
  zipCode: string;
}
export interface PatientProfile {
  id: number | null;
  name: string;
  address: PatientAddress;
  clinic: string;
  description: string;
}

export interface PatientProfileFlat {
  id: number | null;
  name: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  clinic: string;
  description: string;
}
