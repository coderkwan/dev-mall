import styles from "./styles/nav.module.scss";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/devmall.png";

function Nav() {
  return (
    <div className={styles.nav}>
      <div className={styles.nav__logo}>
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
      </div>
    </div>
  );
}

export default Nav;
