import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { useTheme } from "next-themes";
interface ISetTheme {}
const SetTheme = ({}: ISetTheme) => {
  const { theme, setTheme } = useTheme();
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
