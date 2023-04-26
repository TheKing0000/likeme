import NavBar from "@/components/navigation/NavBar";
import { useTheme } from "next-themes";
import Typewriter from "typewriter-effect";
export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <main>
      <NavBar />
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        Change Theme
      </button>
      <h1 className="uppercase mt-5">
        <Typewriter
          options={{
            strings: ["Hello", "World"],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
      <div className="h-screen"></div>
    </main>
  );
}
