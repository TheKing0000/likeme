import NavBar from "@/components/navigation/NavBar";
import { useTheme } from "next-themes";
export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <main>
      <NavBar />
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        Change Theme
      </button>
      <div className="h-screen"></div>
    </main>
  );
}
