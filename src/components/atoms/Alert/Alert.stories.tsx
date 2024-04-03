import type { Meta, StoryObj } from '@storybook/react'

import Alert from './'

const meta: Meta<typeof Alert> = {
  component: Alert,
}

export default meta
type Story = StoryObj<typeof Alert>

export const Error: Story = {
  args: {
    variant: 'filled',
    severity: "error",
  },
}

export const Success: Story = {
  args: {
    variant: 'filled',
    severity: "success",
  },
}
