import { useTheme } from "next-themes";
export default function Home() {
  const { theme, setTheme } = useTheme();
  console.log(theme);
  return (
    <main>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        Change Theme
      </button>
    </main>
  );
}
