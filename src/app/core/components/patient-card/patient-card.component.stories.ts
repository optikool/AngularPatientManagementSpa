import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { MaterialsModule } from '../../materials/materials.module';
import { PatientCardComponent } from './patient-card.component';

export default {
  title: 'App/Core/Patient Card',
  component: PatientCardComponent,
  decorators: [
    moduleMetadata({
      declarations: [PatientCardComponent],
      imports: [
        MaterialsModule
      ],
      providers: [],
    }),
  ]
} as Meta;

const Template: Story = () => ({
});

export const Default = Template.bind({});
