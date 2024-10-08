import React from 'react'

type Props = {
  readonly label: string
  readonly icon: string
}

const Shortcut: React.FC<Props> = ({ label, icon }) => {
  const [focus, setFocus] = React.useState<boolean>(false)

  const onClick: React.MouseEventHandler<HTMLLIElement> = () => {
    setFocus(f => !f)
  }

  return (
    <li className='list-none' onClick={onClick}>
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