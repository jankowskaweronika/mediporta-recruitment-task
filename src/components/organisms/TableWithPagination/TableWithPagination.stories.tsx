import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import TableWithPagination from './TableWithPagination'

const meta: Meta<typeof TableWithPagination> = {
  component: TableWithPagination,
  title: 'TableWithPagination'
}

export default meta 
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    currentPage: 2,
    totalPages: 10,
    onPageChange: fn()
  },
}

export const Secondary: Story = {
  args: {
    currentPage: 5,
    totalPages: 5,
    onPageChange: fn()
  },
}
