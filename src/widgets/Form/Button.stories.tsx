import type { Meta, StoryObj } from '@storybook/react'
import Button from 'widgets/Form/Button'

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    type: {
      control: 'select',
      options: ['button', 'submit']
    }
  }
}

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    label: 'Button',
    type: 'button'
  }
}

export const WithIcon: Story = {
  args: {
    label: 'Button',
    icon: '/assets/icons/resume.png'
  }
}

export default meta
