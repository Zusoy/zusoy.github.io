import React from 'react'
import Input from 'widgets/Form/Input'
import Textarea from 'widgets/Form/Textarea'
import Button from 'widgets/Form/Button'
import Window, { type TaskProps } from 'features/Window'

const Contact: React.FC<TaskProps> = ({ id, index, status, icon, context }) => {
  return (
    <Window
      id={id}
      index={index}
      status={status}
      icon={icon}
      title="Contact me"
      context={context}
    >
      <div className="flex grow w-full h-full">
        <form
          method="POST"
          className="flex w-full flex-col gap-8 p-16"
          action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfmdH70xcytkJ6JfcoLIGZqXLb8x9ZqT9Q61t1m5CjMjbZjqA/formResponse"
        >
          <Input
            label="Email"
            type="email"
            name="entry.1401061540"
            placeholder="Your email"
            required
          />
          <Input
            label="Subject"
            type="text"
            name="entry.645715238"
            placeholder="Subject"
            required
          />
          <Textarea
            label="Body"
            name="entry.56170325"
            placeholder="Enter your message"
            rows={4}
            required
          />
          <Button type="submit" label="Send" />
        </form>
      </div>
    </Window>
  )
}

export default Contact
