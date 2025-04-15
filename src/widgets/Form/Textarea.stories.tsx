import type { Meta, StoryObj } from '@storybook/react'
import Textarea from 'widgets/Form/Textarea'

const meta: Meta<typeof Textarea> = {
  component: Textarea
}

type Story = StoryObj<typeof Textarea>

export const Primary: Story = {
  args: {
    label: 'Textarea'
  }
}

export default meta
