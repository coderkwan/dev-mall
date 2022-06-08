import styles from "./styles/nav.module.scss";
import Link from "next/link";
import { supabase } from "../utils/supabase";
import { useRouter } from "next/router";
import { useEffect, useContext, useRef, useState } from "react";
import { closeNavBar } from "../context/closeNavBar";

function Nav() {
  const router = useRouter();
  const links = useRef();
  const [logged, setLogged] = useState(false);
  const [open, setOpen] = useState(false);

  const { navOpened, setNavOpened } = useContext(closeNavBar);

  function openMenu() {
    if (open) {
      setOpen(false);
    } else {
      setNavOpened(true);
      setOpen(true);
    }
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

  useEffect(() => {
    if (!navOpened) {
      closeMenu();
    }

    const session = supabase.auth.session();
    if (session) {
      setLogged(true);
    } else {
    }
    if (open) {
      links.current.style.display = "flex";
    } else {
      links.current.style.display = "none";
    }
  }, [logged, open, router, navOpened]);

  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <Link href="/">
          <div onClick={closeMenu} className={styles.nav__logo}>
            <>
              <p>
                <span>dev</span>Mall
              </p>
            </>
          </div>
        </Link>
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
              <p style={{ margin: 0 }}>MENU</p>
            ) : (
              <p style={{ margin: 0 }}>CLOSE</p>
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
                  <p>Recommend</p>
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
                    <div
                      onClick={closeMenu}
                      className={styles.mobileLinks__link}
                    >
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
