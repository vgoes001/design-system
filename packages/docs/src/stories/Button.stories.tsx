/* eslint-disable prettier/prettier */
import { ArrowRight } from 'phosphor-react'
import { StoryObj, Meta } from '@storybook/react'

import { Button, ButtonProps } from '@ignite-ui-vgoes/react'

export default {
    title: 'Form/Button',
    component: Button,
    args: {
        children: 'Send',
        variant: 'primary',
        disabled: false
    },
    argTypes: {
        variant: {
            options: ['primary', 'secondary', 'tertiary'],
            control: {
                type: 'inline-radio'
            },
        },
        size: {
            options: ['sm', 'md'],
            defaultValue: 'md',
            control: {
                type: 'inline-radio'
            },
        },
        disabled: {
            control: {
                type: 'boolean'
            }
        },
        onClick: {
            action: 'click'
        }
    },

} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
}

export const Secondary: StoryObj<ButtonProps> = {
    args: {
        variant: 'secondary'
    }
}

export const Small: StoryObj<ButtonProps> = {
    args: {
        size: 'sm'
    }
}

export const WithIcon: StoryObj<ButtonProps> = {
    args: {
        children: (
            <>
                Próximo passo
                <ArrowRight weight='bold' />
            </>
        )
    }
}



export const Disabled: StoryObj<ButtonProps> = {
    args: {
        disabled: true
    }
}