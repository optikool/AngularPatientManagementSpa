import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PatientProfile } from '../types/patient';
import { MatDialog } from '@angular/material/dialog';
import { PatientFormComponent } from '../components/forms/patient-form/patient-form.component';
import { ClinicSelect } from '../types/clinic';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  constructor(private dialog: MatDialog) {}

  loadPatients(): PatientProfile[] {
    return this.payload;
  }

  loadClinics() {
    return this.medicalClinics;
  }

  getFomrattedClinics(): ClinicSelect[] {
    return Object.entries(this.medicalClinics).map((item) => {
      return {
        value: item[0],
        viewValue: item[1]
      }
    });
  }

  openModalDialog(payload: PatientProfile, type: string): Observable<any> {
    const dialogRef = this.dialog.open(PatientFormComponent, {
      maxWidth: '730px',
      disableClose: true,
      data: {
        patientProfile: payload,
        type
      },
    });

    return dialogRef.afterClosed();
  }

  payload: PatientProfile[] = [
    {
      id: 1,
      name: 'Dedra Gettone',
      street: '0 Sloan Court',
      city: 'Birmingham',
      state: 'Alabama',
      zipCode: '35244',
      clinic: 'amc',
      description: 'Curabitur in libero ut massa volutpat convallis.',
    },
    {
      id: 2,
      name: 'Cristy Durram',
      street: '7287 Birchwood Hill',
      city: 'Cincinnati',
      state: 'Ohio',
      zipCode: '45264',
      clinic: 'rcmc',
      description:
        'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.',
    },
    {
      id: 3,
      name: 'Jolynn Petraitis',
      street: '07 Grayhawk Court',
      city: 'Wichita',
      state: 'Kansas',
      zipCode: '67260',
      clinic: 'tvhc',
      description:
        'Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    },
    {
      id: 4,
      name: 'Gerardo Scurlock',
      street: '3478 Waxwing Plaza',
      city: 'Dallas',
      state: 'Texas',
      zipCode: '75379',
      clinic: 'cuc',
      description:
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    },
    {
      id: 5,
      name: 'Honoria Dubarry',
      street: '8567 Walton Plaza',
      city: 'Peoria',
      state: 'Illinois',
      zipCode: '61656',
      clinic: 'amc',
      description: 'Proin risus. Praesent lectus.',
    },
    {
      id: 6,
      name: 'Ilsa Schaben',
      street: '9 Warbler Plaza',
      city: 'San Jose',
      state: 'California',
      zipCode: '95118',
      clinic: 'nc',
      description:
        'Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.',
    },
    {
      id: 7,
      name: 'Sybyl Antal',
      street: '15 Grasskamp Point',
      city: 'Santa Monica',
      state: 'California',
      zipCode: '90405',
      clinic: 'cuc',
      description:
        'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    },
    {
      id: 8,
      name: 'Beatriz Morris',
      street: '680 Morrow Alley',
      city: 'Spring Hill',
      state: 'Florida',
      zipCode: '34611',
      clinic: 'nc',
      description:
        'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    },
    {
      id: 9,
      name: 'Salem Secker',
      street: '563 Amoth Road',
      city: 'Houston',
      state: 'Texas',
      zipCode: '77055',
      clinic: 'rcmc',
      description:
        'Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.',
    },
    {
      id: 10,
      name: 'Rubetta Kilshaw',
      street: '7650 Pierstorff Junction',
      city: 'Bloomington',
      state: 'Indiana',
      zipCode: '47405',
      clinic: 'cuc',
      description:
        'Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    },
    {
      id: 11,
      name: 'Hewet Kira',
      street: '6388 Maple Alley',
      city: 'Charlotte',
      state: 'North Carolina',
      zipCode: '28205',
      clinic: 'amc',
      description:
        'Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    },
    {
      id: 12,
      name: 'Lowell Firmin',
      street: '4 Reinke Crossing',
      city: 'Pompano Beach',
      state: 'Florida',
      zipCode: '33064',
      clinic: 'tvhc',
      description: 'Sed ante. Vivamus tortor.',
    },
    {
      id: 13,
      name: 'Ashlen Jurasek',
      street: '78 Graedel Terrace',
      city: 'Monticello',
      state: 'Minnesota',
      zipCode: '55565',
      clinic: 'nc',
      description:
        'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    },
    {
      id: 14,
      name: 'Devonna Grigore',
      street: '9 Spenser Hill',
      city: 'Lima',
      state: 'Ohio',
      zipCode: '45807',
      clinic: 'nc',
      description:
        'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.',
    },
    {
      id: 15,
      name: 'Cobby Muselli',
      street: '5 Dryden Park',
      city: 'Monticello',
      state: 'Minnesota',
      zipCode: '55585',
      clinic: 'amc',
      description: 'Morbi ut odio.',
    },
    {
      id: 16,
      name: 'Carly Blincko',
      street: '13308 Summit Way',
      city: 'Des Moines',
      state: 'Iowa',
      zipCode: '50315',
      clinic: 'cuc',
      description:
        'Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    },
    {
      id: 17,
      name: 'Anderea Scally',
      street: '107 Ridge Oak Parkway',
      city: 'Memphis',
      state: 'Tennessee',
      zipCode: '38197',
      clinic: 'rcmc',
      description:
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.',
    },
    {
      id: 18,
      name: 'Antonetta Beilby',
      street: '669 Sullivan Circle',
      city: 'Tallahassee',
      state: 'Florida',
      zipCode: '32309',
      clinic: 'hmg',
      description: 'Ut at dolor quis odio consequat varius.',
    },
    {
      id: 19,
      name: 'Emilia Piner',
      street: '13 Kim Hill',
      city: 'Dallas',
      state: 'Texas',
      zipCode: '75221',
      clinic: 'nc',
      description:
        'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    },
    {
      id: 20,
      name: 'Claiborne di Rocca',
      street: '71 Pearson Street',
      city: 'Albuquerque',
      state: 'New Mexico',
      zipCode: '87140',
      clinic: 'amc',
      description:
        'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    },
  ];

  private medicalClinics = {
    'amc': 'Alvarado Medical Clinic',
    'nc': 'Nakamura Clinic',
    'cuc': 'Concentra Urgent Care',
    'rcmc': 'Root Cause Medical Clinic',
    'tvhc': 'Tiburcio Vasquez Health Center',
    'hmg': 'HealthWorks Medical Group'
  }
}
