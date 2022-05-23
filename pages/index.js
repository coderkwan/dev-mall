import styles from "../styles/Home.module.scss";
import Image from "next/image";
import illustration from "../public/images/png.png";
import TechCard from "../components/TechCard";
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <section className={styles.showcase}>
        <div className={styles.showcase__text}>
          <h1>Find the new tech to use on your next project</h1>
          <p>
            This is the right place to catch up with new tecnologies which might
            power your next website or app.
          </p>
          <div className={styles.showcase__buttons}>
            <button
              onClick={() => {
                router.push("/tech/2");
              }}
              className={styles.buttonPrimary}
            >
              Browse tech
            </button>
            <button
              onClick={() => {
                router.push("/tech/2");
              }}
              className={styles.buttonSecondary}
            >
              Post tech
            </button>
          </div>
        </div>
        <div className={styles.showcase__image}>
          <Image src={illustration} alt="Showcase-image" />
        </div>
      </section>
      <section className={styles.about}>
        <div className={styles.about__box}>
          <div className={styles.about__individual}>
            <h3>See reviews and drop reviews</h3>
            <p>
              You can see reviews on your favourite tech, you can also drop a
              review
            </p>
          </div>
          <div className={styles.about__individual}>
            <h3>browse tech by category</h3>
            <p>
              You can see reviews on your favourite tech, you can also drop a
              review
            </p>
          </div>
          <div className={styles.about__individual}>
            <h3>Browse tech by tags</h3>
            <p>
              You can see reviews on your favourite tech, you can also drop a
              review
            </p>
          </div>
        </div>
      </section>
      <section className={styles.random}>
        <div className={styles.random__text}>
          <h2>Today’s random selection</h2>
          <p>
            You can see reviews on your favourite tech, you can also drop a
            review
          </p>
          <button>Browse more</button>
        </div>
        <div className={styles.random__card}>
          <TechCard />
        </div>
      </section>
    </div>
  );
}
