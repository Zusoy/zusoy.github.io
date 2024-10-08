import React from 'react'

type OnTaskLaunch = (tag: string, icon: string) => void

type Props = {
  readonly label: string
  readonly icon: string
  readonly taskTag: string
  readonly active: boolean
  readonly onClick: React.MouseEventHandler<HTMLLIElement>
  readonly onLaunch: OnTaskLaunch
}

const Shortcut: React.FC<Props> = ({ label, icon, taskTag, onClick, onLaunch, active }) => {
  const execute = React.useCallback(
    () => onLaunch(taskTag, icon),
    [onLaunch, taskTag, icon]
  )

  return (
    <li className='list-none' onClick={onClick} onDoubleClick={execute}>
      <button type='button' className='flex flex-col items-center text-center text-[black] m-4 w-2/3'>
        <img
          alt='icon'
          src={icon}
          width={30}
          height={30}
          className={`mb-1 border-none ${active ? 'win-95-shortcut-active' : ''}`}
        />
        <div
          className={`
            border-solid
            border-0
            border-win-95-light
            box-border
            ${active ? 'border-dotted' : ''}
            ${active ? 'border-[1px]' : '' }
            ${active ? 'border-win-95-yellow' : '' }`}
        >
          <p
            className={`
              text-[#fff]
              text-sm
              m-[1px]
              ${active ? 'bg-win-95-blue' : ''}`}
          >
            {label}
          </p>
        </div>
      </button>
    </li>
  )
}

export default Shortcut