import { cx } from './classNames'

describe('classNames', () => {
  test('with only first param', () => {
    expect(cx('someClass')).toBe('someClass')
  })

  test('with additional', () => {
    expect(cx('someClass', {}, ['class1', 'class2'])).toBe('someClass class1 class2')
  })

  test('with mods', () => {
    expect(cx('someClass', { modClass1: false, modClass2: true }, ['class1', 'class2'])).toBe('someClass class1 class2 modClass2')
  })
})
