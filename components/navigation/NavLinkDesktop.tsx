import Link from "next/link";

interface INavLinkDesktop {
  linkText: string;
  hrefText: string;
}
const NavLinkDesktop = ({ linkText, hrefText = "/" }: INavLinkDesktop) => {
  return (
    <>
      <Link href={hrefText}>
        <span className="text-ff text-sm   group  transition duration-300">
          {linkText}
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#3da9fc]"></span>
        </span>
      </Link>
    </>
  );
};

export default NavLinkDesktop;
