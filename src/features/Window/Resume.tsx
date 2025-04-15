import React from 'react'
import Link from 'widgets/Content/Link'
import Window, { type TaskProps } from 'features/Window'

const Resume: React.FC<TaskProps> = ({ id, index, icon, status, context }) => {
  return (
    <Window index={index} id={id} title='Resume' icon={icon} status={status} context={context}>
      <article className='flex flex-col flex-grow gap-6 w-full h-full p-2 justify-start'>
        <header className='flex flex-row items-center gap-2 flex-grow'>
          <Link
            label='LinkedIn'
            icon='/assets/img/socials/linkedin.webp'
            href='https://www.linkedin.com/in/gregoire-drapeau'
            title='LinkedIn'
          />
          <Link
            label='Github'
            icon='/assets/img/socials/github.webp'
            href='https://github.com/Zusoy'
            title='Github'
          />
        </header>
        <section className='w-full h-full'>
          <embed
            type='application/pdf'
            src='/assets/resume.pdf'
            className='w-full h-full'
          />
        </section>
      </article>
    </Window>
  )
}

export default Resume