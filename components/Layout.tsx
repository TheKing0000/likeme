// import ScrollYProgressBar from "./animations/ScrollYProgressBar";
import Footer from "./common/Footer";
import NavBar from "./navigation/NavBar";

interface ILayout {
  children: React.ReactNode;
}
export default function Layout({ children }: ILayout) {
  return (
    <>
      <NavBar />
      {/* <ScrollYProgressBar /> */}
      <main>{children}</main>
      <Footer />
    </>
  );
}
