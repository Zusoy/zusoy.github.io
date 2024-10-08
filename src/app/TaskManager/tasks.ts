import React from 'react'
import type { TaskProps } from 'features/Window'
import Biography from 'features/Window/Biography'
import Resume from 'features/Window/Resume'

declare type TaskProcess = Record<string, React.FC<TaskProps>>

const processes: TaskProcess = {
  biography: Biography,
  resume: Resume
}

export default processes