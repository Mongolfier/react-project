import { useTranslation } from 'react-i18next'
import { cx } from 'shared/lib/classNames/classNames'

interface MainPageProps {
  classNames?: string
}

const MainPage = (props: MainPageProps) => {
  const { classNames } = props
  const { t } = useTranslation()

  return (
    <div className={cx('', {}, [classNames])}>
      {t('main')}</div>
  )
}

export default MainPage
