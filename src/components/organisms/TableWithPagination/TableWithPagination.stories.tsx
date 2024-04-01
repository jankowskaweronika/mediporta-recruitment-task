import type { Meta, StoryObj } from '@storybook/react'

import TableWithPagination from './TableWithPagination'

const meta: Meta<typeof TableWithPagination> = {
  component: TableWithPagination,
  title: 'TableWithPagination'
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
