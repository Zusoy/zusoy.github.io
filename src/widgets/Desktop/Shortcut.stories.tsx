import type { Meta, StoryObj } from '@storybook/react'
import Shortcut from 'widgets/Desktop/Shortcut'

const meta: Meta<typeof Shortcut> = {
  component: Shortcut,
  argTypes: {
    onClick: {
      table: { disable: true }
    },
    onDoubleClick: {
      table: { disable: true }
    },
    onTouch: {
      table: { disable: true }
    },
    icon: {
      table: { disable: true }
    },
    desktopOnly: {
      table: { disable: true }
    }
  },
  decorators: [
    (Story) => (
      <div className="absolute">
        <Story />
      </div>
    )
  ]
}

type Story = StoryObj<typeof Shortcut>

export const Primary: Story = {
  args: {
    label: 'Shortcut',
    icon: '/assets/icons/folder.png',
    active: false,
  }
}

export const Active: Story = {
  args: {
    label: 'Shortcut',
    icon: '/assets/icons/folder.png',
    active: true,
  }
}

export default meta
