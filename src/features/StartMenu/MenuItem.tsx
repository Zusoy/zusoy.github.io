import React from 'react'

type Props = {
  readonly img: string
  readonly label: string
  readonly onClick?: React.MouseEventHandler<HTMLDivElement>
}

type LinkMenuItemProps = Props & {
  readonly href: string
}

export const LinkMenuItem: React.FC<LinkMenuItemProps> = ({
  img,
  label,
  href,
}) => (
  <a
    href={href}
    className="flex flex-row items-center py-[5px] px-[10px] text-[black] bg-transparent cursor-pointer hover:bg-win-95-blue hover:text-[white]"
    target="_blank"
  >
    <img src={img} className="rounded-md mr-[10px]" width={30} height={30} />
    <div>
      <u>{label.slice(0, 1).toUpperCase()}</u>
      {label.slice(1).toLowerCase()}
    </div>
  </a>
)

export const MenuItem: React.FC<Props> = ({ img, label, onClick }) => (
  <div
    onClick={onClick}
    className="flex flex-row items-center py-[5px] px-[10px] text-[black] bg-transparent cursor-pointer hover:bg-win-95-blue hover:text-[white]"
  >
    <img src={img} className="rounded-md mr-[10px]" width={30} height={30} />
    <div>
      <u>{label.slice(0, 1).toUpperCase()}</u>
      {label.slice(1).toLowerCase()}
    </div>
  </div>
)
