import { useTranslation } from 'react-i18next'
import { cx } from 'shared/lib/classNames/classNames'
import { AppLink } from 'shared/ui/AppLink'
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import cls from './Navbar.module.scss'
interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps): JSX.Element => {
  const { t } = useTranslation()

  return (
    <div className={cx(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={cls.mainLink}>{t('main')}</AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/about" >{t('about')}</AppLink>
      </div>
    </div>
  )
}
