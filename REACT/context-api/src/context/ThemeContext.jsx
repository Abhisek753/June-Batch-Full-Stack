import { createContext, useState } from "react";

export const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  let data = "My name is abhsiek";

  function toggleTheme() {
    setTheme(theme == "light" ? "dark" : "light");
  }

  return (
    <ThemeContext.Provider value={{ theme, data, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
