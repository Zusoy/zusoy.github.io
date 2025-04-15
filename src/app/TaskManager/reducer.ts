import type { Reducer } from 'react'
import { type Actions, type State } from 'app/TaskManager/state'
import { TaskStatus } from 'app/TaskManager/tasks'

const reducer: Reducer<State, Actions> = (state, action): State => {
  switch (action.type) {
    case 'new_task':
      return ({
        ...state,
        tasks: [
          ...state.tasks.map(
            task => ({
              ...task,
              status: task.status === TaskStatus.Focus ? TaskStatus.Unfocus : task.status
            })
          ),
          {
            id: action.payload.id,
            tag: action.payload.tag,
            context: action.payload.context,
            icon: action.payload.icon,
            index: state.tasks.length,
            status: TaskStatus.Focus
          }
        ]
      })

    case 'close_task':
      return ({
        ...state,
        tasks: state.tasks.filter(({ id }) => id !== action.payload)
      })

    case 'focus_task':
      return ({
        ...state,
        tasks: state.tasks
          .map((task, i) => ({
            ...task,
            status: (task.id === action.payload)
              ? TaskStatus.Focus
              : (task.status === TaskStatus.Reduced ? task.status : TaskStatus.Unfocus),
            index: (task.id === action.payload) ? state.tasks.length : i
          }))
      })

    case 'reduce_task':
      return ({
        ...state,
        tasks: state.tasks
          .map(task => ({
            ...task,
            status: (task.id === action.payload) ? TaskStatus.Reduced : task.status
          }))
      })
  }
}

export default reducer