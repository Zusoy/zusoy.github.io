import React from 'react'

export type ShortcutProps = {
  readonly label: string
  readonly icon: string
  readonly active: boolean
  readonly onClick?: React.MouseEventHandler<HTMLLIElement>
  readonly onDoubleClick?: React.MouseEventHandler<HTMLLIElement>
  readonly onTouch?: React.TouchEventHandler<HTMLLIElement>
  readonly desktopOnly?: boolean
}

const Shortcut: React.FC<ShortcutProps> = ({ label, icon, active, onClick, onDoubleClick, onTouch, desktopOnly }) => {
  return (
    <li
      className={`list-none ${desktopOnly ? 'max-sm:hidden' : ''}`}
      onClick={onClick}
      onDoubleClick={onDoubleClick}
      onTouchStart={onTouch}
    >
      <button
        type="button"
        className="flex flex-col items-center text-center text-[black] m-4 w-2/3"
      >
        <img
          alt="icon"
          src={icon}
          width={30}
          height={30}
          className={`mb-1 border-none ${active ? 'win-95-shortcut-active' : ''}`}
        />
        <div
          className={`
            border-solid
            border-0
            border-win-95-light
            box-border
            ${active ? 'border-dotted' : ''}
            ${active ? 'border-[1px]' : ''}
            ${active ? 'border-win-95-yellow' : ''}`}
        >
          <p
            className={`
              text-[#fff]
              text-sm
              m-[1px]
              ${active ? 'bg-win-95-blue' : ''}`}
          >
            {label}
          </p>
        </div>
      </button>
    </li>
  )
}

export default Shortcut
