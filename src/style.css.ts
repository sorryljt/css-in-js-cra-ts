import { style, createThemeContract, createTheme } from '@vanilla-extract/css';

export const demo = style({
  width: 150,
  height: 150,
  backgroundColor: '#f00',
  color: '#fff',
  ':hover': {
    backgroundColor: '#009'
  }
});

const colors = createThemeContract({
  color: null,
  backgroundColor: null,
});

export const lightTheme = createTheme(colors, {
  color: '#000000',
  backgroundColor: '#ffffff',
});

export const darkTheme = createTheme(colors, {
  color: '#ffffff',
  backgroundColor: '#000000',
});
export const vars = { colors };

export const essay = style({
  backgroundColor: vars.colors.backgroundColor,
  color: vars.colors.color,
})
