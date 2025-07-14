/**
 * @format
 */

import { AppRegistry, useColorScheme } from 'react-native';
import { name as appName } from './app.json';
import { LightScheme } from './src/theme/LightScheme';
import { DarkScheme } from './src/theme/DarkScheme';
import { MD3DarkTheme, MD3LightTheme, PaperProvider } from 'react-native-paper';
import App from './src/App';


const LightTheme = {
    ...MD3LightTheme,
    colors: LightScheme
}

const DarkTheme = {
    ...MD3DarkTheme,
    colors: DarkScheme
}


export default function Main() {
    const colorScheme = useColorScheme();

    const theme = colorScheme === 'dark' ? DarkTheme : LightTheme
    return (
        <PaperProvider theme={theme}>
            <App />
        </PaperProvider>
    );
}

AppRegistry.registerComponent(appName, () => Main);
