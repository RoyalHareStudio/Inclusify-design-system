import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import WSection from '../wrapper/WSection';
import TestSubcomponents from './utilities/test-subcomponents';
import React from 'react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Wrapper/Section',
    component: WSection,
    parameters: {
      // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
      layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
  } satisfies Meta<typeof WSection>;
  
  export default meta;
  type Story = StoryObj<typeof meta>;
  
  // More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
  export const Default: Story = {
    args: {
      sectionLabelledById: 'testSubcomponents-heading',
      id: 'section-default-storybook-test',
      children: <TestSubcomponents />
    },
  }