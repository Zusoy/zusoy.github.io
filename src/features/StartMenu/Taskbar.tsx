import React from 'react'
import { TaskManagerContext } from 'app/TaskManager'

const Taskbar: React.FC = () => {
  const { state } = React.useContext(TaskManagerContext)

  const tasks = React.useMemo(
    () => state.tasks,
    [state.tasks]
  )

  return (
    <div className='flex flex-row gap-0 overflow-x-scroll items-center' style={{ scrollbarWidth: 'none' }}>
      {tasks.map(
        task => (
          <div key={task.id}>
            <button className='h-6 w-[100px] flex flex-row justify-start mx-[2px] px-[5px] py-[2px] my-0 items-center bg-win-95-silver win-95-border win-95-shadow rounded-[0.5px] text-[0.7rem] font-bold'>
              <img alt='icon' src={task.icon} width={15} height={15} className='mr-[5px] my-0' />
              <p className='m-0 overflow-hidden text-ellipsis whitespace-nowrap'>{task.tag}</p>
            </button>
          </div>
        )
      )}
    </div>
  )
}

export default Taskbar