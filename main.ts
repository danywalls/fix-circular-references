import {defaultThemeConfig} from "./theme-config";


const app = {
    config: undefined,
    showButtons() {
        const buttons = this.config ?? defaultThemeConfig;
        console.log(buttons);
    }
}
app.showButtons()