import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
interface ISetTheme {}
const SetTheme = ({}: ISetTheme) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <>
      {theme === "dark" ? (
        <>
          <BsFillMoonFill
            className="text-[#16161a] dark:text-[#FBFBFB] cursor-pointer "
            size={20}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          />
        </>
      ) : (
        <>
          <BsFillSunFill
            className="text-[#16161a] dark:text-[#FBFBFB] cursor-pointer "
            size={20}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          />
        </>
      )}
    </>
  );
};

export default SetTheme;
