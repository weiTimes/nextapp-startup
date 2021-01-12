import React, { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import BarItem from '@/components/layout/BarItem';

export default {
  title: 'HOME/BarItem',
  component: BarItem,
} as Meta;

const Template: Story<ComponentProps<typeof BarItem>> = (args) => (
  <BarItem {...args} />
);

export const Active = Template.bind({});
Active.args = {
  active: true,
  children: 'BarItem',
};

export const NoActive = Template.bind({});
NoActive.args = {
  active: false,
  children: 'BarItem',
};
