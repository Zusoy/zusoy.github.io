import { describe, expect, test } from 'vitest'
import reducer from 'app/TaskManager/reducer'
import {
  initialState,
  NewTaskAction,
  CloseTaskAction,
  type State
} from 'app/TaskManager/state'
import { TaskStatus, Task } from 'app/TaskManager/tasks'

const getTaskMock = (id: string, status: TaskStatus, index: number): Task => ({
  id,
  status,
  index,
  tag: 'biography',
  icon: '/icon.png',
  context: null
})

describe('TaskManager/reducer', () => {
  describe('NewTaskAction', () => {
    test ('it creates new task', () => {
      const action = new NewTaskAction({
        id: '123',
        tag: 'biography',
        icon: '/icon.png',
        context: null
      })

      expect(reducer(initialState, action)).toEqual({
        ...initialState,
        tasks: [{
          id: '123',
          tag: 'biography',
          icon: '/icon.png',
          context: null,
          index: 0,
          status: TaskStatus.Focus
        }]
      })
    })

    test ('it creates new task and unfocus others', () => {
      const initial: State = {
        ...initialState,
        tasks: [
          getTaskMock('111', TaskStatus.Focus, 0),
          getTaskMock('222', TaskStatus.Reduced, 1)
        ]
      }

      const action = new NewTaskAction({
        id: '333',
        tag: 'biography',
        icon: '/icon.png',
        context: null
      })

      expect(reducer(initial, action)).toEqual({
        ...initial,
        tasks: [
          { id: '111', status: TaskStatus.Unfocus, icon: '/icon.png', index: 0, tag: 'biography', context: null, },
          { id: '222', status: TaskStatus.Reduced, icon: '/icon.png', index: 1, tag: 'biography', context: null, },
          { id: '333', status: TaskStatus.Focus, icon: '/icon.png', index: 2, tag: 'biography', context: null, }
        ]
      })
    })
  })

  describe('CloseTaskAction', () => {
    test ('it removes task', () => {
      const initial: State = {
        ...initialState,
        tasks: [
          getTaskMock('111', TaskStatus.Focus, 1)
        ]
      }

      const action = new CloseTaskAction('111')

      expect(reducer(initial, action)).toEqual({
        ...initial,
        tasks: []
      })
    })
  })
})