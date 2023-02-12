import { Theme, useTheme } from 'app/providers/ThemeProvider'
import { cx } from 'shared/lib/classNames/classNames'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import { Button, ThemeButton } from 'shared/ui/Button/ui/Button'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps): JSX.Element => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={cx('', {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  )
}
