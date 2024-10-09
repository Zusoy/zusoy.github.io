import React from 'react'

type Props = {
  readonly label: string
  readonly icon?: string
  readonly title?: string
  readonly href: string
}

const Link: React.FC<Props> = ({ href, label, icon, title }) => {
  return (
    <a href={href} target='_blank' title={title} className='win-95-button p-[2px] align-middle cursor-pointer bg-win-95-silver win-95-border win-95-shadow'>
      <span className='flex items-center justify-center border-[1px] border-solid border-[transparent]'>
        {icon && <img src={icon} alt='icon' height={15} width={15} className='my-0 mr-1' />}
        <p className='mt-[2px]'>{label}</p>
      </span>
    </a>
  )
}

export default Link
