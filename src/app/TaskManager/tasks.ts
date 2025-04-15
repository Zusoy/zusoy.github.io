import React from 'react'
import type { TaskProps } from 'features/Window'
import Biography from 'features/Window/Biography'
import Resume from 'features/Window/Resume'
import Maze from 'features/Window/Maze'
import Contact from 'features/Window/Contact'
import type { Nullable } from 'utils'

declare type TaskProcess = Record<string, React.ElementType<TaskProps>>

const processes: TaskProcess = {
  biography: Biography,
  resume: Resume,
  maze: Maze,
  contact: Contact,
}

export enum TaskStatus {
  Focus = 'focus',
  Unfocus = 'unfocus',
  Reduced = 'reduced',
}

export interface Task<T extends Nullable<object> = null> {
  id: string
  tag: string
  index: number
  icon: string
  status: TaskStatus
  context: T
}

export default processes
