import { Colors } from './colors'

const fontSizes = {
  fs48: '48px',
  fs24: '24px',
  fs18: '18px',
  fs16: '16px',
  fs14: '14px',
}

const textStyles = {
  h1: {
    fontSize: fontSizes.fs48,
    fontWeight: 900,
  },

  h2: {
    fontSize: fontSizes.fs24,
    fontWeight: 700,
    lineHeight: '150%',
  },

  h3: {
    fontSize: fontSizes.fs18,
    fontWeight: 700,
    lineHeight: '150%',
  },

  h4: {
    fontSize: fontSizes.fs16,
    fontWeight: 400,
    lineHeight: '100%',
  },

  h5: {
    fontSize: fontSizes.fs14,
    fontWeight: 400,
    lineHeight: '100%',
  },
}

export const baseTheme = {
  fontSizes,
  textStyles,
}
export type Theme = { colors: Colors } & typeof baseTheme
