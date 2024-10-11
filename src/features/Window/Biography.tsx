import React from 'react'
import Button from 'widgets/Form/Button'
import Window, { type TaskProps } from 'features/Window'
import { TaskManagerContext } from 'app/TaskManager'

const Biography: React.FC<TaskProps> = ({ id, index, icon, status }) => {
  const { dispatch } = React.useContext(TaskManagerContext)

  const openResumeWindow = React.useCallback(() => {
    dispatch({
      type: 'new_task',
      payload: {
        id: Date.now().toString(),
        icon: '/assets/icons/resume.png',
        tag: 'resume'
      }
    })
  }, [dispatch])

  return (
    <Window title='Biography' icon={icon} index={index} id={id} status={status}>
      <article className='flex flex-col flex-grow gap-6 w-full h-full p-2 justify-start'>
        <section className='flex flex-col gap-1 w-full items-center justify-center'>
          <h1 className='text-2xl underline'>Grégoire Drapeau</h1>
          <Button
            type='button'
            label='Resume'
            icon='/assets/icons/resume.png'
            onClick={openResumeWindow}
          />
          <hr />
          <div className='flex flex-col justify-center w-full items-center gap-2'>
            <img src='/assets/img/me.jpg' width={200} height={200} className='rounded-xl' />
            <p>Hello there ! my name is Grégoire Drapeau and I'm a <b>software developer</b>.</p>
            <p>I'm <b>passionate</b> about technology and coding.</p>
            <p>Originating from France, I did a technology school and have multiple years of experiences.</p>
          </div>
        </section>
        <section className='flex flex-col gap-1 w-full items-center justify-center'>
          <h1 className='text-2xl underline'>Skills and expertise</h1>
          <hr />
          <div className='flex flex-row flex-grow justify-center w-full items-center gap-4 mt-4'>
            <div className='flex flex-col gap-1 items-center justify-center win-95-border py-1 px-4 min-w-24'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
              </svg>
              <p>Frontend</p>
            </div>
            <div className='flex flex-col gap-1 items-center justify-center win-95-border py-1 px-4 min-w-24'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
              </svg>
              <p>REST API</p>
            </div>
          </div>
        </section>
      </article>
    </Window>
  )
}

export default Biography