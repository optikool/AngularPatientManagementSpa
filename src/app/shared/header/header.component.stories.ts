import { moduleMetadata, Meta, Story } from '@storybook/angular';
import { HeaderComponent } from './header.component';
import { MaterialsModule } from '../../core/materials/materials.module';
import { provideMockStore } from '@ngrx/store/testing';
import { initialState } from 'src/app/core/store/patient';

export default {
  title: 'App/Shared/Header',
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      declarations: [HeaderComponent],
      imports: [MaterialsModule],
      providers: [provideMockStore({ initialState })]
    }),
  ],
} as Meta;

const Template: Story = (args) => ({
  props: args,
});

export const Primary = Template.bind({});
