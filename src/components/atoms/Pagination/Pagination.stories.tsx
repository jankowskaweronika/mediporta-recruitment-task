import type { Meta, StoryObj } from '@storybook/react'

import Pagination from './'

const meta: Meta<typeof Pagination> = {
  component: Pagination,
}

export default meta
type Story = StoryObj<typeof Pagination>

export const PaginationStory: Story = {
  args: {
    page: 3,
    count: 10,
  },
}
