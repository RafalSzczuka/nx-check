import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CustomInputComponent } from './custom-input.component';

export default {
  title: 'UI/CustomInputComponent',
  component: CustomInputComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<CustomInputComponent>;

const Template: Story<CustomInputComponent> = (args: CustomInputComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}