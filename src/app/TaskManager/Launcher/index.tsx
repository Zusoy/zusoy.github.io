import React from 'react'
import Task from 'app/TaskManager/Launcher/Task'
import { TaskManagerContext } from 'app/TaskManager'

const Launcher: React.FC = () => {
  const { state } = React.useContext(TaskManagerContext)

  return (
    <React.Fragment>
      {state.tasks.map(({ tag, id, index, icon }) => (
        <Task
          key={id}
          taskId={id}
          taskIndex={index}
          taskTag={tag}
          taskIcon={icon}
        />
      ))}
    </React.Fragment>
  )
}

export default Launcher
