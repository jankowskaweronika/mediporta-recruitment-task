import type { Meta, StoryObj } from '@storybook/react'

import TableComponent from './TableComponent'

const meta: Meta<typeof TableComponent> = {
  component: TableComponent,
  title: 'TableComponent'
}

export default meta
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
