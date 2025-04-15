import React from 'react'
import tasks from 'app/TaskManager/tasks'
import { TaskProps } from 'features/Window'

type Props = TaskProps & {
  tag: string
}

const Task: React.FC<Props> = ({ id, index, icon, status, tag, context }) => {
  const TaskWindow = tasks[tag]

  return (
    <TaskWindow
      id={id}
      icon={icon}
      index={index}
      status={status}
      context={context}
    />
  )
}

export default Task
