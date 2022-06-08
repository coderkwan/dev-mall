import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { closeNavBar } from "../context/closeNavBar";

import styles from "../styles/layout.module.scss";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

export default function Layout({ children }) {
  const loarder = useRef();
  const router = useRouter();
  const [navOpened, setNavOpened] = useState(false);

  function bodyClicked() {
    if (navOpened) {
      setNavOpened(false);
      console.log("menu closed");
    } else {
      console.log("menu NOT opened");
    }
  }

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      loarder.current.style.display = "block";
    });
    router.events.on("routeChangeComplete", () => {
      loarder.current.style.display = "none";
    });
  }, [router]);

  return (
    <closeNavBar.Provider value={{ navOpened, setNavOpened }}>
      <div onClick={bodyClicked}>
        <Nav />
        <div ref={loarder} className={styles.loader}></div>
        <main>{children}</main>
        <Footer />
      </div>
    </closeNavBar.Provider>
  );
}
