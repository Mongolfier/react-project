import { cx } from 'shared/lib/classNames/classNames'
import './PageLoader.scss'

interface PageLoaderProps {
  classNames?: string
}

const PageLoader = (props: PageLoaderProps): JSX.Element => {
  const { classNames } = props

  return (
    <div
      className={cx('page-loader', {}, [classNames])}
    >
      <div className="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default PageLoader
