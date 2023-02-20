import { lazy } from 'react'

export const AboutPageAsync = lazy(async () => await new Promise((resolve) => {
  // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
  // @ts-expect-error потому что
  setTimeout(() => { resolve(import('./AboutPage')) }, 1500)
}))
