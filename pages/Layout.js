import Footer from "../components/Footer";
import Nav from "../components/Nav";
export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
