import { useState } from "react";
import styles from "../../styles/register.module.scss";
import { useRouter } from "next/dist/client/router";
import { supabase } from "../../utils/supabase";

export default function Index() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function login(e) {
    e.preventDefault();
    try {
      setLoading(true);
      const { user, session, error } = await supabase.auth.signIn({
        email: e.target.email.value,
        password: e.target.password.value,
      });
      if (user) {
        router.push("/techs");
      }
      if (error) throw error;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <form onSubmit={login}>
          <div className={styles.InputAndLabel}>
            <label htmlFor="">Email</label>
            <input required={true} type="email" name="email" />
          </div>
          <div className={styles.InputAndLabel}>
            <label htmlFor="">Password</label>
            <input required={true} type="text" name="password" />
          </div>
          <button type="submit">{loading ? "Loading..." : "Login"}</button>
          <div
            onClick={() => {
              router.push("/register");
            }}
          >
            <p>
              Don't have an account? <span>Register here!</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
