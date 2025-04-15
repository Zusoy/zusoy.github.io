import type { Meta, StoryObj } from '@storybook/react'
import Input from 'widgets/Form/Input'

const meta: Meta<typeof Input> = {
  component: Input
}

type Story = StoryObj<typeof Input>

export const primary: Story = {
  args: {
    label: 'Windows Input'
  }
}

export default meta
