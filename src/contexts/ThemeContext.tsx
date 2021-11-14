import React, {createContext, useCallback, useContext, useMemo, useState} from 'react';
import {DarkTheme as PaperDarkTheme, DefaultTheme as PaperDefaultTheme} from "react-native-paper";
import {DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationDefaultTheme} from "@react-navigation/native";

// ----------- THEME CUSTOMIZATION -----------

const PRIMARY = '#6247aa';
const ACCENT = '#00B4D8';


const CombinedDefaultTheme = {
    ...PaperDefaultTheme,
    ...NavigationDefaultTheme,
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
    const [isThemeDark, setIsThemeDark] = useState(false);

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
