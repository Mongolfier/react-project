import { Suspense } from 'react'
import { cx } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from 'app/providers/router'
import { Sidebar } from 'widgets/Sidebar'
import { Navbar } from 'widgets/Navbar'
import { PageLoader } from 'shared/ui/PageLoader/PageLoader'

function App() {
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
