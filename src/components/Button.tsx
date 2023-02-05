import { ReactNode } from 'react'

interface ButtonProps {
  text: string
  color: string
  textColor: string
  leftComponent: ReactNode
  hoverColor: string
  height: number
  width: number
}

export function Button({
  text,
  color,
  textColor,
  leftComponent,
  height,
  width
}: ButtonProps) {
  return (
    <button
      className="flex p-1 space-x-1 justify-center items-center rounded-md transition-opacity hover:opacity-90"
      style={{
        backgroundColor: `${color}`,
        width: `${width}px`,
        height: `${height}px`
      }}
    >
      {leftComponent && leftComponent}
      <p className=" font-bold p-1" style={{ color: `${textColor}` }}>
        {text}
      </p>
    </button>
  )
}
