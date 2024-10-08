import type { Reducer } from 'react'
import { TaskStatus, type Actions, type State } from 'app/TaskManager/state'

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
  }
}

export default reducer