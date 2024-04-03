import type { Meta, StoryObj } from '@storybook/react'

import TableWithPagination from './TableWithPagination'

const meta: Meta<typeof TableWithPagination> = {
  component: TableWithPagination,
}

export default meta 
type Story = StoryObj<typeof meta>

const createData = (name: string, count: number) => {
  return {
    name,
    count
  }
}

const rows = [
  createData('Cupcake', 305),
  createData('Donut', 452),
  createData('Eclair', 262),
  createData('Frozen yoghurt', 159),
  createData('Gingerbread', 356),
  createData('Honeycomb', 408),
  createData('Ice cream sandwich', 237),
  createData('Jelly Bean', 375),
  createData('KitKat', 518),
  createData('Lollipop', 392),
  createData('Marshmallow', 318),
  createData('Nougat', 360),
  createData('Oreo', 437),
]

export const Primary: Story = {
  args: {
    rows,
    sortOrder:  'asc',
    sortCol: 'name',
    currentPage: 5,
    totalPages: 10,
  },
}
