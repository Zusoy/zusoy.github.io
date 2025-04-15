import React from 'react'

const Timer: React.FC = () => {
  return (
    <div className="flex h-[25px] w-[75px] m-1 flex-row items-center justify-center bg-win-95-silver win-95-border border-[1.5px] text-xs">
      <img
        alt="icon"
        src="/assets/icons/speakers.png"
        width={15}
        height={15}
        className="mr-1 my-0"
      />
      <time>11:35 AM</time>
    </div>
  )
}

export default Timer
