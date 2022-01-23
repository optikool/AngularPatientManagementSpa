import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { MaterialsModule } from '../../../materials/materials.module';
import { PatientFormComponent } from './patient-form.component';

const patientProfile = {
  id: 1,
  name: 'John Doe',
  address: {
    street: '32568 Willets Street',
    city: 'Santa Barbara',
    state: 'CA',
    zipCode: 94687
  },
  clinic: 'Health Clinic of America',
  description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.'
};

const patientProfileNew = {
  id: null,
  name: '',
  address: {
    street: '',
    city: '',
    state: '',
    zipCode: 0
  },
  clinic: '',
  description: ''
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
        ReactiveFormsModule
      ],
      providers: [],
    }),
  ]
} as Meta;

const Template: Story = (args) => ({
  props: args,
});

export const NewProfile = Template.bind({});
NewProfile.args = {
  patientProfileNew
};

export const EditProfile = Template.bind({});
EditProfile.args = {
  patientProfile
};



