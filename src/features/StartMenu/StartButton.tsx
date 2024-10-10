import React from 'react'

type Props = {
  readonly onClick: React.MouseEventHandler<HTMLButtonElement>
}

const StartButton: React.FC<Props> = ({ onClick }) =>
  <button
    type='button'
    className='
      w-16
      h-6
      m-1
      flex
      items-center
      win-95-shadow
      win-95-border
      justify-center
      cursor-pointer
      bg-win-95-silver
      border-[1.5px]
      active:win-95-border-active
      active:shadow-none'
    onClick={onClick}
  >
    <div className='flex items-center justify-center'>
      <img src='assets/win95.png' className='border-none' width={18} height={18} />
      <span className='pl-[3px] text-[0.9rem] font-bold bg-none'>Start</span>
    </div>
  </button>

export default StartButton