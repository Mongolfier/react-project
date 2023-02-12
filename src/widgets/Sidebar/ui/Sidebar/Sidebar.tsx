import { useState } from 'react'
import { cx } from 'shared/lib/classNames/classNames'
import LangSwitcher from 'shared/ui/LangSwitcher/LangSwitcher'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import cls from './Sidebar.module.scss'

interface SidebarProps {
  className?: string
}

const Sidebar = (props: SidebarProps): JSX.Element => {
  const { className } = props

  const [collapsed, setCollapsed] = useState(false)

  const onToggle = (): void => {
    setCollapsed((collapsed) => !collapsed)
  }

  return (
    <div className={cx(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <button onClick={onToggle}>toggle</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  )
}

export default Sidebar
