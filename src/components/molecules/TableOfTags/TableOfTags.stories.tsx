import type { Meta, StoryObj } from '@storybook/react'

import TableOfTags from './TableOfTags'

const createData = (id: number, name: string, count: number) => {
  return {
    id,
    name,
    count
  }
}

const rows = [
  createData(1, 'Cupcake', 305),
  createData(2, 'Donut', 452),
  createData(3, 'Eclair', 262),
  createData(4, 'Frozen yoghurt', 159),
  createData(5, 'Gingerbread', 356),
  createData(6, 'Honeycomb', 408),
  createData(7, 'Ice cream sandwich', 237),
  createData(8, 'Jelly Bean', 375),
  createData(9, 'KitKat', 518),
  createData(10, 'Lollipop', 392),
  createData(11, 'Marshmallow', 318),
  createData(12, 'Nougat', 360),
  createData(13, 'Oreo', 437),
]

const meta: Meta<typeof TableOfTags> = {
  component: TableOfTags,
  title: 'TableOfTags'
}

export default meta
type Story = StoryObj<typeof meta>

export const RowsSortedByNameAsc: Story = {
  args: {
    rows,
    sortCol: 'name',
    sortOrder: 'asc'
  },
}

export const RowsSortedByNameDesc: Story = {
  args: {
    rows,
    sortCol: 'name',
    sortOrder: 'desc'
  },
}

export const RowsSortedByCountAsc: Story = {
  args: {
    rows,
    sortCol: 'count',
    sortOrder: 'asc'
  },
}

export const RowsSortedByCountDesc: Story = {
  args: {
    rows,
    sortCol: 'count',
    sortOrder: 'desc'
  },
}

export const RowsSortedByUnknownAsc: Story = {
  args: {
    rows,
    sortCol: 'whatever',
    sortOrder: 'asc'
  },
}