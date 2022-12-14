/* eslint-disable prettier/prettier */
import { StoryObj, Meta } from '@storybook/react'

import { Avatar, AvatarProps } from '@ignite-ui-vgoes/react'

export default {
    title: 'Data display/Avatar',
    component: Avatar,
    args: {
        src: 'https://github.com/vgoes001.png',
        alt: 'Vitor Goes'
    },
    argTypes: {
        src: {
            control: {
                type: 'text'
            }
        }
    }
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}


export const WithFallback: StoryObj<AvatarProps> = {
    args: {
        src: undefined,

    }
}