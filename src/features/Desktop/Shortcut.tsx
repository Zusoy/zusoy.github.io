import React from 'react'
import DesktopShortcut, { type ShortcutProps } from 'widgets/Desktop/Shortcut'

type OnTaskLaunch = (tag: string, icon: string) => void

type Props = ShortcutProps & {
  readonly taskTag: string
  readonly onLaunch: OnTaskLaunch
}

const Shortcut: React.FC<Props> = ({
  label,
  icon,
  taskTag,
  onClick,
  onLaunch,
  active,
  desktopOnly = false,
}) => {
  const execute = React.useCallback(
    () => onLaunch(taskTag, icon),
    [onLaunch, taskTag, icon],
  )

  return (
    <DesktopShortcut
      label={label}
      icon={icon}
      active={active}
      desktopOnly={desktopOnly}
      onClick={onClick}
      onDoubleClick={execute}
      onTouch={execute}
    />
  )
}

export default Shortcut
