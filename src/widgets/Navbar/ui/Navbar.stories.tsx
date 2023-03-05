import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { Navbar } from './Navbar'

export default {
  title: 'widget/Navbar',
  component: Navbar,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />

export const Light = Template.bind({})
Light.args = {}
Light.decorators = [StoreDecorator({

}), __IS_DEV__]
export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({}), __IS_DEV__]

export const AuthNavbar = Template.bind({})
AuthNavbar.args = {}
AuthNavbar.decorators = [StoreDecorator({
  user: { authData: { id: '123', username: 'admin' } }
}), __IS_DEV__]
