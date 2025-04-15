import React from 'react'
import Task from 'app/TaskManager/Launcher/Task'
import { TaskManagerContext } from 'app/TaskManager'

const Launcher: React.FC = () => {
  const { state } = React.useContext(TaskManagerContext)

  return (
    <React.Fragment>
      {state.tasks.map(({ tag, id, index, icon, status, context }) => (
        <Task
          key={id}
          id={id}
          index={index}
          tag={tag}
          icon={icon}
          status={status}
          context={context}
        />
      ))}
    </React.Fragment>
  )
}

export default Launcher
