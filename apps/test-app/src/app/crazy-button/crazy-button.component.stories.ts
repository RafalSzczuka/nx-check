import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CrazyButtonComponent } from './crazy-button.component';

export default {
  title: 'Buttons/CrazyButtonComponent',
  component: CrazyButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<CrazyButtonComponent>;

const Template: Story<CrazyButtonComponent> = (args: CrazyButtonComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}