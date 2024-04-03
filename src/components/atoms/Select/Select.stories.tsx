import type { Meta, StoryObj } from '@storybook/react'

import Select from './'
import MenuItem from '../MenuItem'

const meta: Meta<typeof Select> = {
  component: Select,
}

export default meta
type Story = StoryObj<typeof Select>

export const SelectStory: Story = {
  args: {
    id: 'select',
    value: 'popular',
    children: [
      <MenuItem
        key={'popular'}
        value={"popular"}
      >
        Popular
      </MenuItem>,
      <MenuItem
        key={'activity'}
        value={"activity"}
      >
        Activity
      </MenuItem>,
      <MenuItem
        key={'name'}
        value={"name"}
      >
        Name
      </MenuItem>,
    ]
  },
}