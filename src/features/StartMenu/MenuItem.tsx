import React from 'react'

type Props = {
  img: string
  label: string
}

const MenuItem: React.FC<Props> = ({ img, label }) =>
  <div className='flex flex-row items-center py-[5px] px-[10px] text-[black] bg-transparent cursor-pointer hover:bg-win-95-blue hover:text-[white]'>
    <img src={img} className='rounded-md mr-[10px]' width={30} height={30}/>
    <div>
      <u>{label.slice(0, 1).toUpperCase()}</u>{label.slice(1).toLowerCase()}
    </div>
  </div>

export default MenuItem