import React, { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import ProductOptimCard from './';

export default {
  title: 'TWOONE/ProductOptim/ProductOptimCard',
  component: ProductOptimCard,
} as Meta;

const Template: Story<ComponentProps<typeof ProductOptimCard>> = (args) => (
  <ProductOptimCard {...args} />
);

export const DefaultCard = Template.bind({});
DefaultCard.args = {
  data: {
    isMustDo: false,
    isFinish: false,
    title: '单品标题优化',
  },
};

export const MustDoCard = Template.bind({});
MustDoCard.args = {
  data: {
    isMustDo: true,
    isFinish: false,
    title: '单品标题优化',
  },
};

export const FinishCard = Template.bind({});
FinishCard.args = {
  data: {
    isMustDo: false,
    isFinish: true,
    title: '单品标题优化',
  },
};

export const UnFinishCard = Template.bind({});
UnFinishCard.args = {
  data: {
    isMustDo: false,
    isFinish: false,
    title: '单品标题优化',
  },
};
