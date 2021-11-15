import React, {createContext, useCallback, useContext, useMemo, useState} from 'react';
import {DarkTheme as PaperDarkTheme, DefaultTheme as PaperDefaultTheme} from "react-native-paper";
import {DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationDefaultTheme} from "@react-navigation/native";
import {useColorScheme} from "react-native";

// ----------- THEME CUSTOMIZATION -----------

const PRIMARY = '#ff5d8f';
const ACCENT = '#00B4D8';

const DEFAULT_THEME_ICON = require('../../assets/images/sun.png');
const DARK_THEME_ICON = require('../../assets/images/moon.png');


const CombinedDefaultTheme = {
    ...PaperDefaultTheme,
    ...NavigationDefaultTheme,
    icon: DEFAULT_THEME_ICON,
    colors: {
        ...PaperDefaultTheme.colors,
        ...NavigationDefaultTheme.colors,
        primary: PRIMARY,
        accent: ACCENT,
    },
};

const CombinedDarkTheme = {
    ...PaperDarkTheme,
    ...NavigationDarkTheme,
    icon: DARK_THEME_ICON,
    colors: {
        ...PaperDarkTheme.colors,
        ...NavigationDarkTheme.colors,
        primary: PRIMARY,
        accent: ACCENT,
    },
};


// ----------- CONFIGURATION -----------

export const ThemeContext = createContext({
    isThemeDark: false,
    theme: CombinedDefaultTheme,
    toggleTheme: () => {
    },
});

type Props = {
    children: any;
}

export const ThemeProvider = (props: Props) => {
    const colorScheme = useColorScheme();   // dark | light | null

    const [isThemeDark, setIsThemeDark] = useState(colorScheme === 'dark');

    const theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;

    const toggleTheme = useCallback(() => setIsThemeDark(!isThemeDark), [isThemeDark]);

    const preferences = useMemo(
        () => ({
            isThemeDark,
            theme,
            toggleTheme
        }),
        [isThemeDark, theme, toggleTheme]
    );

    return (
        <ThemeContext.Provider value={preferences}>
            {props.children}
        </ThemeContext.Provider>
    );
}


export const useThemeContext = () => useContext(ThemeContext);
