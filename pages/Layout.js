import Footer from "../components/Footer";
import Nav from "../components/Nav";

import styles from "../styles/layout.module.scss";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

export default function Layout({ children }) {
  const [isServer, setIsServer] = useState(true);
  const loarder = useRef();
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      loarder.current.style.display = "block";
    });
    router.events.on("routeChangeComplete", () => {
      loarder.current.style.display = "none";
    });
  }, [router]);

  return (
    <>
      <Nav />
      <div ref={loarder} className={styles.loader}></div>
      <main>{children}</main>
      <Footer />
    </>
  );
}
