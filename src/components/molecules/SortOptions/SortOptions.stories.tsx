import type { Meta, StoryObj } from '@storybook/react'

import SortOptions from './SortOptions'

const meta: Meta<typeof SortOptions> = {
  component: SortOptions,
  title: 'SortOptions'
}

export default meta 
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    page: 2,
    pageSize: 10,
    sortCol: 'activity',
    sortOrder: 'asc'
  },
}
