import React from 'react'

type Props = {
  readonly onClick: React.MouseEventHandler<HTMLButtonElement>
  readonly label: string
  readonly icon?: string
}

const Button: React.FC<Props> = ({ onClick, label, icon }) => {
  return (
    <button onClick={onClick} className='win-95-button p-[2px] align-middle cursor-pointer bg-win-95-silver win-95-border win-95-shadow'>
      <span className='flex items-center justify-center border-[1px] border-solid border-[transparent]'>
        {icon && <img src={icon} alt='icon' height={15} width={15} className='my-0 mr-1' />}
        <p className='mt-[2px]'>{label}</p>
      </span>
    </button>
  )
}

export default Button