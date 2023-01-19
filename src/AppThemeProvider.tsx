import {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useContext,
  useState
} from 'react';
import { ThemeName, ThemeProvider, themes } from './theme';

type ThemeState = {
  theme: ThemeName;
  toggleTheme: () => void;
};

const AppThemeContext = createContext<ThemeState>({
  theme: 'Dark',
  toggleTheme: () => void 0
});

type AppThemeProviderProps = {
  children: ReactNode;
};

/** Provider to get theme data */
export const AppThemeProvider: FC<AppThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeName>('Light');
  const toggleTheme = useCallback(
    () => setTheme((theme) => (theme === 'Light' ? 'Dark' : 'Light')),
    []
  );

  return (
    <AppThemeContext.Provider
      value={{
        theme,
        toggleTheme
      }}
    >
      <ThemeProvider theme={theme === 'Light' ? themes.Light : themes.Dark}>
        {children}
      </ThemeProvider>
    </AppThemeContext.Provider>
  );
};

/** Hok to get theme through context */
export const useAppTheme = () => useContext(AppThemeContext);
