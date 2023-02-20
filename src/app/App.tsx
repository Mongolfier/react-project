import { cx } from 'shared/lib/classNames/classNames'
import { useTheme } from './providers/ThemeProvider'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { Suspense } from 'react'
import { PageLoader } from 'shared/ui/PageLoader/PageLoader'
import './styles/index.scss'

const App = (): JSX.Element => {
  const { theme } = useTheme()

  return (
    <div className={cx('app', {}, [theme])}>
      <Suspense fallback={<PageLoader />}>
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>

    </div>
  )
}

export default App
