import React from 'react'
import Task from 'app/TaskManager/Launcher/Task'
import { TaskManagerContext } from 'app/TaskManager'

const Launcher: React.FC = () => {
  const { state } = React.useContext(TaskManagerContext)

  return (
    <React.Fragment>
      {state.tasks.map(({ tag, id, index, icon, status }) => (
        <Task
          key={id}
          id={id}
          index={index}
          tag={tag}
          icon={icon}
          status={status}
        />
      ))}
    </React.Fragment>
  )
}

export default Launcher
