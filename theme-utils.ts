import { Theme } from './theme.model';
import { ButtonStyle } from './button-style.model';

// Function that applies a theme to a button, modifying its style
export function applyThemeToButtonStyle(buttonStyle: ButtonStyle, theme: Theme): ButtonStyle {
  // Imagine this function does more complex style adaptations based on the theme
  const modifiedStyle: ButtonStyle = {
    backgroundColor: theme.buttonStyle.backgroundColor,
    textColor: theme.buttonStyle.textColor
  };
  return modifiedStyle;
}