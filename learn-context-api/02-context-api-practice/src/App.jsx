
import { useEffect, useState } from "react"
import { ThemeProvider } from "./context/theme"
import ThemeButton from "./components/ThemeButton";
import Card from "./components/Card";


export default function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  }

  //actual theme chagne

  useEffect(() => {
    document.querySelector('html').classList.remove("light", 'dark')
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode]);

  const darkTheme = () => {
    setThemeMode("dark");
  }

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>

      <ThemeButton />
      <Card />

    </ThemeProvider>
  )
}
