import { useTranslation } from 'react-i18next'
import { cx } from 'shared/lib/classNames/classNames'
import cls from './NotFoundPage.module.scss'

interface NotFoundPageProps {
  classNames?: string
}

const NotFoundPage = (props: NotFoundPageProps): JSX.Element => {
  const { classNames } = props
  const { t } = useTranslation()
  return (
    <div
      className={cx(cls.NotFoundPage, {}, [classNames])}
    >
      {t('pageNotFound')}
    </div>
  )
}

export default NotFoundPage
