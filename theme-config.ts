import {ButtonConfig} from "./button";
import {DarkTheme} from "./theme";

export type ThemeConfig =  {
    type: 'dark' | 'light'
    buttons: Array<ButtonConfig>;
};

export const defaultThemeConfig  : ThemeConfig = {
    buttons: [
        {
            theme: DarkTheme,
            label: 'Accept'
        },
        {
            theme: DarkTheme,
            label: 'Cancel'
        }
    ],
    type: 'dark'
}