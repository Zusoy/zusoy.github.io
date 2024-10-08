import React from 'react'
import { Actions, initialState, State } from 'app/TaskManager/state'
import reducer from 'app/TaskManager/reducer'

type Context = {
  readonly dispatch: React.Dispatch<Actions>,
  readonly state: State
}

export const TaskManagerContext = React.createContext<Context>({
  state: initialState,
  dispatch: () => {}
})

const TaskManager: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  const contextValue = React.useMemo<Context>(
    () => ({ state, dispatch }),
    [state, dispatch]
  )

  return (
    <TaskManagerContext.Provider value={contextValue}>
      {children}
    </TaskManagerContext.Provider>
  )
}

export default TaskManager