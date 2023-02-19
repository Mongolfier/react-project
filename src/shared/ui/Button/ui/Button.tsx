import { type ButtonHTMLAttributes, type FC } from 'react'
import { cx } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme,
    ...otherProps
  } = props

  return (
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    <button type="button" {...otherProps} className={cx(cls.Button, {}, [className, theme ? cls[theme] : undefined])}>
      {children}
    </button>
  )
}
