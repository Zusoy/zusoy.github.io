import React from 'react'

type Props = JSX.IntrinsicElements['input'] & {
  readonly label: string
}

const Input: React.FC<Props> = (props) => {
  const id = React.useId()

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id}>{props.label}</label>
      <input
        {...props}
        id={id}
        className="win-95-border outline-none min-h-8 max-h-10"
      >
        {props.children}
      </input>
    </div>
  )
}

export default Input
