import type { Meta, StoryObj } from '@storybook/react'

import Select from './'

const meta: Meta<typeof Select> = {
  component: Select,
}

export default meta
type Story = StoryObj<typeof Select>

export const SelectStory: Story = {
  args: {
    id: 'select',
    labelId: 'select',
    label: 'select',
    value: 'hello',
  },
  argTypes: {
    onChange: { 
      action: 'onChange callback was called with' 
    }, 
  },
}