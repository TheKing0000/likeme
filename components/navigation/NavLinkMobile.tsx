import { motion, Variants } from "framer-motion";
import Link from "next/link";
const mobileNavListItemVariant: Variants = {
  initial: { opacity: 0, x: -30 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, type: "spring", stiffness: 100 },
  },
};
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
      <Link href={hrefText} onClick={handleNavbarClose}>
        <motion.h1
          variants={mobileNavListItemVariant}
          key={linkText}
          className="text-ff hover:text-[#3da9fc] uppercase text-lg inline-block"
        >
          {linkText}
        </motion.h1>
      </Link>
    </>
  );
};

export default NavLinkMobile;
