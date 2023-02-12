import { useTranslation } from 'react-i18next'

const MainPage = (): JSX.Element => {
  const { t } = useTranslation('mainPage')

  return (
    <div>{t('main')}</div>
  )
}

export default MainPage
