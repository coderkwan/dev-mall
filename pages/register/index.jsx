import { useState } from "react";
import styles from "../../styles/register.module.scss";

export default function index() {
  const [login, setLogin] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        {!login ? (
          <form action="">
            <div className={styles.InputAndLabel}>
              <label htmlFor="">Username</label>
              <input required={true} type="text" name="username" id="" />
            </div>
            <div className={styles.InputAndLabel}>
              <label htmlFor="">Email</label>
              <input required={true} type="email" name="email" />
            </div>
            <button>Register with magic link</button>
            <div
              onClick={() => {
                setLogin(true);
              }}
            >
              <p>
                Already have an account? <span>Login here!</span>
              </p>
            </div>
          </form>
        ) : (
          <form action="">
            <div className={styles.InputAndLabel}>
              <label htmlFor="">Email</label>
              <input required={true} type="email" name="email" />
            </div>
            <button>Get magic link</button>
            <div
              onClick={() => {
                setLogin(false);
              }}
            >
              <p>
                Don't have an account? <span>Register here!</span>
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
