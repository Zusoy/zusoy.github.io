export enum TaskStatus {
  Focus = 'focus',
  Unfocus = 'unfocus',
  Reduced = 'reduced'
}

export type Task = {
  id: string
  tag: string
  index: number
  icon: string
  status: TaskStatus
}

export type State = {
  tasks: Task[]
}

export const initialState: State = {
  tasks: []
}

export interface Action {
  readonly type: string
}

export interface ActionWithPayload<T> extends Action {
  readonly payload: T
}

type NewTaskPayload = { id: string, tag: string, icon: string }
export class NewTaskAction implements ActionWithPayload<NewTaskPayload> {
  readonly type = 'new_task'
  constructor (public readonly payload: NewTaskPayload) {}
}

export class CloseTaskAction implements ActionWithPayload<Task['id']> {
  readonly type = 'close_task'
  constructor (public readonly payload: Task['id']) {}
}

export type Actions =
  NewTaskAction |
  CloseTaskAction