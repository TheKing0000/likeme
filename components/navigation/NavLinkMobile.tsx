import Link from "next/link";

interface INavLinkMobile {
  linkText: string;
  hrefText: string;
  handleNavbarClose(): void;
}
const NavLinkMobile = ({
  linkText,
  hrefText = "/",
  handleNavbarClose,
}: INavLinkMobile) => {
  return (
    <>
      <Link
        href={hrefText}
        onClick={handleNavbarClose}
        className="text-ff hover:text-[#3da9fc] uppercase text-lg inline-block"
      >
        {linkText}
      </Link>
    </>
  );
};

export default NavLinkMobile;
