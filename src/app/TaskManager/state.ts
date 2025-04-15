import type { Task } from 'app/TaskManager/tasks'

export type State = {
  tasks: Task[]
}

export const initialState: State = {
  tasks: [],
}

export interface Action {
  readonly type: string
}

export interface ActionWithPayload<T> extends Action {
  readonly payload: T
}

type NewTaskPayload<T extends object | null = null> = {
  id: string
  tag: string
  icon: string
  context: T
}
export class NewTaskAction implements ActionWithPayload<NewTaskPayload> {
  readonly type = 'new_task'
  constructor(public readonly payload: NewTaskPayload) {}
}

export class CloseTaskAction implements ActionWithPayload<Task['id']> {
  readonly type = 'close_task'
  constructor(public readonly payload: Task['id']) {}
}

export class FocusTaskAction implements ActionWithPayload<Task['id']> {
  readonly type = 'focus_task'
  constructor(public readonly payload: Task['id']) {}
}

export class ReduceTaskAction implements ActionWithPayload<Task['id']> {
  readonly type = 'reduce_task'
  constructor(public readonly payload: Task['id']) {}
}

export type Actions =
  | NewTaskAction
  | CloseTaskAction
  | FocusTaskAction
  | ReduceTaskAction
