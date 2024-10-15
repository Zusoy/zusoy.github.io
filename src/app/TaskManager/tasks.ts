import React from 'react'
import type { TaskProps } from 'features/Window'
import Biography from 'features/Biography'
import Resume from 'features/Resume'
import Maze from 'features/Maze'
import Contact from 'features/Contact'

declare type TaskProcess = Record<string, React.FC<TaskProps>>

const processes: TaskProcess = {
  biography: Biography,
  resume: Resume,
  maze: Maze,
  contact: Contact
}

export default processes