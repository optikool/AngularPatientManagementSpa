import { FlexLayoutModule } from '@angular/flex-layout';
import { provideMockStore } from '@ngrx/store/testing';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { MaterialsModule } from '../../materials/materials.module';
import { initialState } from '../../store/patient';
import { PatientCardComponent } from './patient-card.component';

const patientProfile = {
  id: 1,
  name: 'John Doe',
  street: '32568 Willets Street',
  city: 'Santa Barbara',
  state: 'CA',
  zipCode: 94687,
  clinic: 'Health Clinic of America',
  description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.'
};

export default {
  title: 'App/Core/Patient Card',
  component: PatientCardComponent,
  decorators: [
    moduleMetadata({
      declarations: [PatientCardComponent],
      imports: [
        MaterialsModule,
        FlexLayoutModule
      ],
      providers: [provideMockStore({ initialState })],
    }),
  ]
} as Meta;

const Template: Story = (args) => ({
  props: args,
});

export const SummaryProfile = Template.bind({});
SummaryProfile.args = {
  patientProfile,
  isFullProfile: false
};

export const FullProfile = Template.bind({});
FullProfile.args = {
  patientProfile,
  isFullProfile: true
};



