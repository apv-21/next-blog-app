import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import styles from "../styles/Toolbar.module.css";

export const Toolbar = () => {
  const router = useRouter();
  const [isDarkMode, setDarkMode] = useState(false);

  const enableDarkMode = () => {
    setDarkMode(true);
    if (typeof window !== "undefined") {
      const bodyTag = document.getElementsByTagName("body")?.[0];
      if (bodyTag) {
        bodyTag.style.backgroundColor = "black";
        bodyTag.style.color = "white";
      }
    }
  };

  const disableDarkMode = () => {
    setDarkMode(false);
    if (typeof window !== "undefined") {
      const bodyTag = document.getElementsByTagName("body")?.[0];
      if (bodyTag) {
        bodyTag.style.backgroundColor = "white";
        bodyTag.style.color = "black";
      }
    }
  };

  return (
    <div className={styles.main}>
      <div onClick={() => router.push("/")}>Home</div>
      <div onClick={() => router.push("/post/about-us")}>About Us</div>
      <div
        onClick={() => (window.location.href = "https://twitter.com/portexe")}
      >
        Twitter
      </div>
      <div
        onClick={() => (window.location.href = "https://github.com/portexe")}
      >
        GitHub
      </div>
      <div>
        {isDarkMode ? (
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/toggle-on-1780888-1514132.png"
            alt="Toggle Icon - Download in Glyph Style"
            jsname="HiaYvf"
            jsaction="load:XAeZkd;"
            data-noaft="1"
            style={{ width: "30px", height: "20px", margin: "0px" }}
            onClick={disableDarkMode}
          />
        ) : (
          <img
            src="https://cdn1.iconfinder.com/data/icons/user-interface-11/100/10-512.png"
            alt="Control, enable, on off, switch, toggle icon - Download on Iconfinder"
            jsname="HiaYvf"
            jsaction="load:XAeZkd;"
            data-noaft="1"
            style={{ width: "30px", height: "20px", margin: "0px" }}
            onClick={enableDarkMode}
          />
        )}
      </div>
    </div>
  );
};
