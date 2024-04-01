import type { Meta, StoryObj } from '@storybook/react'

import Pagination from './Pagination'

const meta: Meta<typeof Pagination> = {
  component: Pagination,
  title: 'Pagination'
}

export default meta
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
