import type { Meta, StoryObj } from '@storybook/react'

import CircularProgress from './'

const meta: Meta<typeof CircularProgress> = {
  component: CircularProgress,
}

export default meta
type Story = StoryObj<typeof CircularProgress>

export const Circular: Story = {
  args: {
    size: 40,
  },
}
