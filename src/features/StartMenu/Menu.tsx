import React from 'react'
import { MenuItem, LinkMenuItem } from 'features/StartMenu/MenuItem'
import { TaskManagerContext } from 'app/TaskManager'

type Props = {
  readonly opened: boolean
  readonly onClose: () => void
}

const Menu: React.FC<Props> = ({ opened, onClose }) => {
  const { dispatch } = React.useContext(TaskManagerContext)

  const launchTask = React.useCallback(
    (tag: string, icon: string) => {
      dispatch({
        type: 'new_task',
        payload: {
          id: Date.now().toString(),
          context: null,
          icon,
          tag,
        },
      })

      onClose()
    },
    [dispatch, onClose],
  )

  return (
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
      <div className="items-end bg-win-95-dark-gray flex h-full w-[25px]">
        <img className="w-full border-none" src="/assets/sidebar.png" />
      </div>
      <div className="flex-grow">
        <MenuItem
          label="Resume"
          img="/assets/icons/resume.png"
          onClick={() => launchTask('resume', '/assets/icons/resume.png')}
        />
        <LinkMenuItem
          label="Github"
          img="/assets/img/socials/github.webp"
          href="https://github.com/Zusoy"
        />
        <LinkMenuItem
          label="LinkedIn"
          img="/assets/img/socials/linkedin.webp"
          href="https://www.linkedin.com/in/gregoire-drapeau/"
        />
        <LinkMenuItem
          label="X"
          img="/assets/img/socials/x.webp"
          href="https://x.com/gregoire_drp"
        />
        <MenuItem
          label="Contact me"
          img="/assets/icons/mail.png"
          onClick={() => launchTask('contact', '/assets/icons/mail.png')}
        />
      </div>
    </div>
  )
}

export default Menu
