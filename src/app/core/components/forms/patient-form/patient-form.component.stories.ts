import { FlexLayoutModule } from '@angular/flex-layout';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { PatientProfile } from '../../../types/patient';
import { MaterialsModule } from '../../../materials/materials.module';
import { PatientFormComponent } from './patient-form.component';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

let patientProfile: PatientProfile = {
  id: null,
  name: '',
  street: '',
  city: '',
  state: '',
  zipCode: '',
  clinic: '',
  description: '',
};

export default {
  title: 'App/Core/Patient Form',
  component: PatientFormComponent,
  decorators: [
    moduleMetadata({
      declarations: [PatientFormComponent],
      imports: [
        MaterialsModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatDialogModule
      ],
      providers: [
        { provide: MatDialogRef, useValue: {} },
	      { provide: MAT_DIALOG_DATA, useValue: [] }
      ],
    }),
  ],
} as Meta;

const Template: Story = (args) => ({
  props: args,
});

export const NewProfile = Template.bind({});
NewProfile.args = {
  createUpdate: 'Create',
  patientProfile,
  isNew: true,
  isEditable: true
};

const controlsConfig = {
  id: 1,
  name: 'John Doe',
  street: '32568 Willets Street',
  city: 'Santa Barbara',
  state: 'CA',
  zipCode: '94687',
  clinic: 'Health Clinic of America',
  description:
    'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.',
};

const registerForm = {
  ...controlsConfig,
};

patientProfile = {
  id: 1,
  name: 'John Doe',
  street: '32568 Willets Street',
  city: 'Santa Barbara',
  state: 'CA',
  zipCode: '94687',
  clinic: 'Health Clinic of America',
  description:
    'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.',
};

export const EditProfile = Template.bind({});
EditProfile.args = {
  createUpdate: 'Update',
  isNew: false,
  patientProfile,
  controlsConfig,
  isEditable: true,
  registerForm: new FormBuilder()
};
