import React from "react";
import styles from "../styles/tech.module.scss";
import git from "../public/icons/githublt.png";
import twitter from "../public/icons/twitterlt.png";
import internet from "../public/icons/internetlt.png";
import Image from "next/image";

function Review({ mydata }) {
  return (
    <div className={styles.details__links}>
      {mydata.link && (
        <a rel="noreferrer" target="_blank" href={`${mydata.link}`}>
          <span>
            <Image src={internet} width={25} height={25} alt="internet" />
          </span>
          <p>Website</p>
        </a>
      )}
      {mydata.repository && (
        <a rel="noreferrer" target="_blank" href={`${mydata.repository}`}>
          <span>
            <Image src={git} width={25} height={25} alt="git" />
          </span>
          <p>GitHub</p>
        </a>
      )}
      {mydata.twitter && (
        <a rel="noreferrer" target="_blank" href={`${mydata.twitter}`}>
          <span>
            <Image src={twitter} width={25} height={25} alt="twitter" />
          </span>
          <p>Twitter</p>
        </a>
      )}
    </div>
  );
}

export default Review;
