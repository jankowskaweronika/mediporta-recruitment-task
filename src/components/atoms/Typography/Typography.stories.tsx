import type { Meta, StoryObj } from '@storybook/react'

import Typography from './'

const meta: Meta<typeof Typography> = {
  component: Typography,
}

export default meta
type Story = StoryObj<typeof Typography>

export const H6: Story = {
  args: {
    variant: "h6",
    children: 'Example text'
  },
}

export const Body1: Story = {
  args: {
    variant: "body1",
    children: 'Example text'
  },
}