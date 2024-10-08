import React from 'react'
import tasks from 'app/TaskManager/tasks'

type Props = {
  readonly taskId: string
  readonly taskIcon: string
  readonly taskIndex: number
  readonly taskTag: string
}

const Task: React.FC<Props> = ({ taskId, taskIndex, taskTag, taskIcon }) => {
  const TaskWindow = tasks[taskTag]

  return (
    <TaskWindow
      id={taskId}
      icon={taskIcon}
      index={taskIndex}
    />
  )
}

export default Task
