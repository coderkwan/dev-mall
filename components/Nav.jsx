import styles from "./styles/nav.module.scss";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/devmall.png";
import menu from "../public/icons/menudk.png";
import close from "../public/icons/close.png";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

function Nav() {
  const router = useRouter();
  const links = useRef();
  const [open, setOpen] = useState(false);

  function openMenu() {
    setOpen(!open);
  }
  function closeMenu() {
    setOpen(false);
  }

  useEffect(() => {
    if (open) {
      links.current.style.display = "flex";
    } else {
      links.current.style.display = "none";
    }
  }, [open]);

  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <div onClick={closeMenu} className={styles.nav__logo}>
          <Link href="/">
            <Image src={logo} height={30} width={92.7} alt="logo" />
          </Link>
        </div>
        <div className={styles.nav__links}>
          <Link href="/techs">
            <div className={styles.nav__link}>
              <p>Browse tech</p>
            </div>
          </Link>
          <Link href="/register">
            <div className={styles.nav__link}>
              <p>Login</p>
            </div>
          </Link>
        </div>
        <div className={styles.nav__Moblinks}>
          <div onClick={openMenu} className={styles.menu}>
            {!open ? (
              <Image src={menu} width={30} height={30} alt="menu" />
            ) : (
              <Image src={close} width={30} height={30} alt="menu" />
            )}
          </div>
          <div ref={links} className={styles.mobileLinks}>
            <div className={styles.mobileLinks__links}>
              <Link href="/techs">
                <div onClick={closeMenu} className={styles.mobileLinks__link}>
                  <p>Browse tech</p>
                </div>
              </Link>
              <Link href="/login">
                <div onClick={closeMenu} className={styles.mobileLinks__link}>
                  <p>Login</p>
                </div>
              </Link>
              <Link href="/register">
                <div onClick={closeMenu} className={styles.mobileLinks__link}>
                  <p>Register</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
