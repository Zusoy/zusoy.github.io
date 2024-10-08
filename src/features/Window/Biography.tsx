import React from 'react'
import Window, { type TaskProps } from 'features/Window'

const Biography: React.FC<TaskProps> = ({ id, index, icon, status }) => {
  return (
    <Window title='Biography' icon={icon} index={index} id={id} status={status}>
      <div className='flex flex-col flex-grow gap-6 w-full h-full p-2 justify-start'>
        <section className='flex flex-col gap-1 w-full items-center justify-center'>
          <h1 className='text-2xl underline'>Biography</h1>
          <hr />
          <div className='flex flex-col justify-center w-full items-center gap-2'>
            <img src='/assets/img/me.jpg' width={200} height={200} className='rounded-xl' />
            <p>Hello! my name is Grégoire Drapeau and I'm a software developer.</p>
            <p>I'm <b>passionate</b> about web development and video-games development.</p>
          </div>
        </section>
        <section className='flex flex-col gap-1 w-full items-center justify-center'>
          <h1 className='text-2xl underline'>Why development</h1>
          <hr />
          <div className='flex flex-col justify-center w-full items-center gap-2'>
            <p>I love to inovate, to create and build tools that helps people.</p>
            <p>Same in game development, I love to build worlds that take alive while you're coding.</p>
          </div>
        </section>
      </div>
    </Window>
  )
}

export default Biography