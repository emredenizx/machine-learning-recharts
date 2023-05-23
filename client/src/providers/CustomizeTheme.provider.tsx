import { Theme, ThemeProperty, ThemePropertyValue } from "types/theme";
import { createContext, useMemo, useReducer } from "react";
import { defaultTheme } from "theme/index";

interface Update {
  key: ThemeProperty;
  payload: ThemePropertyValue;
}

interface Action {
  type: "UPDATE_THEME";
  payload: Update;
}

interface Context {
  theme: Theme;
  updateTheme: (updates: Update) => void;
}

export const ThemeContext = createContext<Context>({
  theme: defaultTheme,
  updateTheme: () => undefined
});

function contextReducer(state: Theme, action: Action): Theme {
  switch (action.type) {
    case "UPDATE_THEME": {
      const { key, payload } = action.payload;

      return {
        ...state,
        [key]: {
          ...state[key],
          ...payload
        }
      };
    }
    default:
      return state;
  }
}

function CustomizeThemeProvider({
  children,
}: { children: JSX.Element }): JSX.Element {
  const [theme, dispatch] = useReducer(contextReducer, defaultTheme);

  const updateTheme = (update: Update): void => {
    dispatch({ type: "UPDATE_THEME", payload: update });
  };

  const value = useMemo(() => ({
    theme,
    updateTheme
  }), [theme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export default CustomizeThemeProvider;
