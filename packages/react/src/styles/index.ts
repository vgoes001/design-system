/* eslint-disable prettier/prettier */
import { colors, fontSizes, fontWeights, fonts, lineHeights, radii, space } from '@ignite-ui/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const { styled, css, keyframes, getCssText, theme, createTheme } = createStitches({
    themeMap: {
        ...defaultThemeMap,
        height: 'space',
        width: 'space'
    },
    theme: {
        colors,
        fontSizes,
        fontWeights,
        fonts,
        lineHeights,
        radii,
        space
    },
})
