import { useState, useEffect } from "react";
import styles from "../../styles/register.module.scss";
import { supabase } from "../../utils/supabase";
import { useRouter } from "next/dist/client/router";

export default function Index() {
  const [loading, setLoading] = useState(false);
  const [logged, setLogged] = useState(false);
  const [done, setDone] = useState(false);
  const router = useRouter();

  async function register(e) {
    e.preventDefault();
    try {
      setLoading(true);
      const { user, session, error } = await supabase.auth.signUp(
        {
          email: e.target.email.value,
          password: e.target.password.value,
        },
        {
          data: {
            name: e.target.username.value,
          },
        }
      );
      if (user) {
        setDone(true);
        // router.reload();
      }
      if (error) throw error;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
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
    if (logged) {
      router.push("/profile");
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        {done && (
          <p className={styles.confirm}>
            We&apos;ve sent you an Email, Please go click the confirm button!
          </p>
        )}

        <form onSubmit={register}>
          <div className={styles.InputAndLabel}>
            <label htmlFor="">Fullname</label>
            <input required={true} type="text" name="username" id="" />
          </div>
          <div className={styles.InputAndLabel}>
            <label htmlFor="">Email</label>
            <input required={true} type="email" name="email" />
          </div>
          <div className={styles.InputAndLabel}>
            <label htmlFor="">Password</label>
            <input required={true} type="text" name="password" />
          </div>
          <button type="submit">{loading ? "Loading..." : "Register"}</button>
          <div
            onClick={() => {
              router.push("/login");
            }}
          >
            <p>
              Already have an account? <span>Login here!</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
