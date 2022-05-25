import styles from "./styles/nav.module.scss";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/devmall.png";
import menu from "../public/icons/menudk.png";
import close from "../public/icons/close.png";
import { supabase } from "../utils/supabase";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

function Nav() {
  const router = useRouter();
  const links = useRef();
  const [logged, setLogged] = useState(false);
  const [open, setOpen] = useState(false);

  function openMenu() {
    setOpen(!open);
  }
  function closeMenu() {
    setOpen(false);
  }

  async function logout() {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        throw error;
      }
      router.reload();
    } catch (error) {
      console.log(error);
    }
  }

  async function checkSession() {
    try {
      const session = supabase.auth.session();
      if (session) {
        setLogged(true);
        return true;
      }
      return false;
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    checkSession();
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
          <Link href="/post">
            <div className={styles.nav__link}>
              <p>Recommend</p>
            </div>
          </Link>
          {!logged ? (
            <>
              <Link href="/login">
                <div className={styles.nav__link}>
                  <p>Login</p>
                </div>
              </Link>
              <Link href="/register">
                <div className={styles.nav__link}>
                  <p>Register</p>
                </div>
              </Link>
            </>
          ) : (
            <>
              <Link href="/profile">
                <div className={styles.nav__link}>
                  <p>Profile</p>
                </div>
              </Link>
              <div onClick={logout} className={styles.nav__link}>
                <p>Logout</p>
              </div>
            </>
          )}
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
              <Link href="/post">
                <div onClick={closeMenu} className={styles.mobileLinks__link}>
                  <p>Post tech</p>
                </div>
              </Link>
              {!logged ? (
                <>
                  <Link href="/login">
                    <div
                      onClick={closeMenu}
                      className={styles.mobileLinks__link}
                    >
                      <p>Login</p>
                    </div>
                  </Link>
                  <Link href="/register">
                    <div
                      onClick={closeMenu}
                      className={styles.mobileLinks__link}
                    >
                      <p>Register</p>
                    </div>
                  </Link>
                </>
              ) : (
                <>
                  <Link href="/profile">
                    <div className={styles.mobileLinks__link}>
                      <p>Profile</p>
                    </div>
                  </Link>
                  <div onClick={logout} className={styles.mobileLinks__link}>
                    <p>Logout</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
