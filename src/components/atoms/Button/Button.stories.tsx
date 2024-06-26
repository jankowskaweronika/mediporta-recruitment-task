import type { Meta, StoryObj } from '@storybook/react'

import Button from './'

const meta: Meta<typeof Button> = {
  component: Button,
}

export default meta
type Story = StoryObj<typeof Button>

export const ButtonLoad: Story = {
  args: {
    variant: 'outlined',
    fullWidth: true
  },
}
