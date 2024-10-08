import React from 'react'
import { TaskManagerContext } from 'app/TaskManager'

export type TaskProps = {
  readonly id: string
  readonly icon: string
  readonly index: number
}

type Props = TaskProps & {
  readonly children: React.ReactNode
  readonly title: string
}

type Coords = {
  x: number
  y: number
}

const Window: React.FC<Props> = ({ id, index, children, title, icon }) => {
  const { dispatch } = React.useContext(TaskManagerContext)
  const [position, setPosition] = React.useState<Coords>({ x: 0, y: 0 })
  const [anchor, setAnchor] = React.useState<Coords>({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = React.useState<boolean>(false)

  const closeWindowTask = React.useCallback(() => {
    dispatch({
      type: 'close_task',
      payload: id
    })
  }, [dispatch, id])

  const onMouseDown: React.MouseEventHandler<HTMLDivElement> = e => {
    setIsDragging(true)
    setAnchor({ x: e.clientX - position.x, y: e.clientY - position.y  })
  }

  const onMouseUp: React.MouseEventHandler<HTMLDivElement> = () => {
    setIsDragging(false)
  }

  const onMouseMove: React.MouseEventHandler<HTMLDivElement> = e => {
    if (!isDragging) {
      return
    }

    setPosition({
      x: e.clientX - anchor.x,
      y: e.clientY - anchor.y
    })
  }

  return (
    <div
      className={`
        flex
        flex-col
        flex-nowrap
        absolute
        left-[5vw]
        top-[10vh]
        z-[${(index * 100).toString()}]
        w-0
        h-0
        m-0
        p-0
        max-h-[100vh]
        max-w-[100vw]
        win-95-shadow
        win-95-border
        bg-win-95-gray
        min-h-[80vh]
        min-w-[50vw]`}
      style={{ outline: '1px solid #dedede', transform: `translate(${position.x}px, ${position.y}px)` }}
    >
      <div
        className={`
          flex
          flex-row
          justify-between
          items-center
          w-auto
          z-[${(index * 100).toString()}]
          m-[2px]
          p-[2px]
          cursor-move
          bg-win-95-blue`}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
      >
        <div className='flex flex-row items-center text-[white] text-sm font-medium ml-1 p-0'>
          <img alt='icon' src={icon} width={15} height={15} className='mb-0 mr-1' />
          <b>{title}</b>
        </div>
        <div className='flex flex-row items-center justify-between'>
          <div
            role='button'
            onClick={() => {}}
            className='
              flex
              text-sm
              font-bold
              items-center
              justify-center
              bg-win-95-gray
              win-95-border
              win-95-shadow
              h-4
              w-4
              ml-[2px]
              active:win-95-border-active
              active:shadow-none
              active:bg-win-95-silver'
          >
            <span className='text-center h-[2px] w-[6px] bg-[black] mt-2 mr-[2px]'></span>
          </div>
          <div
            role='button'
            onClick={() => {}}
            className='
              flex
              text-sm
              font-bold
              items-center
              justify-center
              bg-win-95-gray
              win-95-border
              win-95-shadow
              h-4
              w-4
              ml-[2px]
              active:win-95-border-active
              active:shadow-none
              active:bg-win-95-silver'
          >
            <b>❒</b>
          </div>
          <div
            role='button'
            onClick={closeWindowTask}
            className='
              flex
              text-sm
              font-bold
              items-center
              justify-center
              bg-win-95-gray
              win-95-border
              win-95-shadow
              h-4
              w-4
              ml-[2px]
              active:win-95-border-active
              active:shadow-none
              active:bg-win-95-silver'
          >
            <b>X</b>
          </div>
        </div>
      </div>
      <div className='flex-grow overflow-x-hidden p-0'>
        {children}
      </div>
    </div>
  )
}

export default Window