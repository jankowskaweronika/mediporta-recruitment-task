import { Meta, StoryObj } from '@storybook/react'
import Box  from '.'

const meta: Meta<typeof Box> = {
  component: Box,
  title: 'Box'
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {

  },
}