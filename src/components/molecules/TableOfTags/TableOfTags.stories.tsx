import type { Meta, StoryObj } from '@storybook/react'

import TableOfTags from './TableOfTags'

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

const meta: Meta<typeof TableOfTags> = {
  component: TableOfTags,
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