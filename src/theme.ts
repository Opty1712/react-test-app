import { createTheming } from '@callstack/react-theme-provider';
import { ComponentClass, ReactNode } from 'react';

const colorsFromFigma = {
  Dark: {
    Text: {
      Primary: '#00f',
      Secondary: '#f00'
    }
  },
  Light: {
    Text: {
      Primary: '#ff0',
      Secondary: '#0f0'
    }
  }
} as const;

export const { Dark, Light } = colorsFromFigma;
export type Theme = { theme: typeof Dark };
export const themes = { Dark, Light };
export type ThemeName = keyof typeof themes;
const theming = createTheming(Dark);
const { withTheme, useTheme } = theming;

type FixedThemeProvider = ComponentClass<{
  theme: typeof Dark | typeof Light;
  children: ReactNode;
}>;

/** Error in `@callstack/react-theme-provider` - absence of children prop*/
const ThemeProvider = (theming.ThemeProvider as unknown) as FixedThemeProvider;

export { withTheme, ThemeProvider, useTheme };
