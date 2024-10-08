import React from 'react'
import MenuItem from 'features/StartMenu/MenuItem'

type Props = {
  readonly opened: boolean
}

const Menu: React.FC<Props> = ({ opened }) =>
  <div
    className={`
      ${opened ? 'flex' : 'hidden'}
      absolute
      transform
      transition-all
      win-95-shadow
      left-0
      bottom-[40px]
      flex-row
      text-[12px]
      h-[282px]
      max-w-full
      w-[165px]
      z-[9999]
      bg-win-95-gray
      overflow-hidden
      win-95-border
      border-t-[2px]
      border-r-[1.5px]
      border-b-[1.5px]
      border-l-[2px]`}
    style={{ outline: '1px solid #dedede' }}
  >
    <div className='items-end bg-win-95-dark-gray flex h-full w-[25px]'>
      <img className='w-full border-none' src='/assets/sidebar.png' />
    </div>
    <div className='flex-grow'>
      <MenuItem label='Resume' img='/assets/icons/resume.png' />
    </div>
  </div>

export default Menu