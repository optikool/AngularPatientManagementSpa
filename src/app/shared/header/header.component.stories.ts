import { moduleMetadata, Meta, Story } from '@storybook/angular';
import { HeaderComponent } from './header.component';
import { Router } from '@angular/router';
import { MaterialsModule } from '../../core/materials/materials.module';

let routerMock = {
  events: () => {},
  navigate: () => {},
};

export default {
  title: 'App/Shared/Header',
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      declarations: [HeaderComponent],
      imports: [MaterialsModule],
    }),
  ],
} as Meta;

const Template: Story = (args) => ({
  props: args,
});

export const Primary = Template.bind({});
