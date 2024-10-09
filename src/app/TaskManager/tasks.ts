import React from 'react'
import type { TaskProps } from 'features/Window'
import Biography from 'features/Window/Biography'
import Resume from 'features/Window/Resume'
import Maze from 'features/Window/Maze'

declare type TaskProcess = Record<string, React.FC<TaskProps>>

const processes: TaskProcess = {
  biography: Biography,
  resume: Resume,
  maze: Maze
}

export default processes