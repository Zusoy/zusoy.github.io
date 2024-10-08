import React from 'react'

type OnTaskLaunch = (tag: string, icon: string) => void

type Props = {
  readonly label: string
  readonly icon: string
  readonly taskTag: string
  readonly onLaunch: OnTaskLaunch
}

const Shortcut: React.FC<Props> = ({ label, icon, taskTag, onLaunch }) => {
  const [focus, setFocus] = React.useState<boolean>(false)

  const onClick: React.MouseEventHandler<HTMLLIElement> = () => {
    setFocus(true)
  }

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
          className={`mb-1 border-none ${focus ? 'win-95-shortcut-active' : ''}`}
        />
        <div
          className={`
            border-solid
            border-0
            border-win-95-light
            box-border
            ${focus ? 'border-dotted' : ''}
            ${focus ? 'border-[1px]' : '' }
            ${focus ? 'border-win-95-yellow' : '' }`}
        >
          <p
            className={`
              text-[#fff]
              text-sm
              m-[1px]
              ${focus ? 'bg-win-95-blue' : ''}`}
          >
            {label}
          </p>
        </div>
      </button>
    </li>
  )
}

export default Shortcut