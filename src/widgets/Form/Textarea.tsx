import React from 'react'

type Props = JSX.IntrinsicElements['textarea'] & {
  readonly label: string
}

const Textarea: React.FC<Props> = props => {
  const id = React.useId()

  return (
    <div className='flex flex-col gap-1'>
      <label htmlFor={id}>{props.label}</label>
      <textarea
        {...props}
        id={id}
        className='win-95-border outline-none'
      >
        {props.children}
      </textarea>
    </div>
  )
}

export default Textarea