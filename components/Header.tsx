import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Img from "./Img";
import styles from "./Header.module.css";
import logoShort from "@/images/layoutPictures/LIV-logo-kurz.png";
import logoLong from "@/images/layoutPictures/Logo-weiss-freigestellt-lang.png";

const INSTAGRAM = "https://www.instagram.com/lessoninviolencebandofficial/";
const FACEBOOK = "https://www.facebook.com/lessoninviolencebandofficial/";

/**
 * Fixed top navigation. On small screens it turns into a burger menu, which is
 * toggled purely with CSS (hidden checkbox) – no JavaScript needed.
 */
export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <nav role="navigation">
              <div id={styles.menuToggle}>
                <input type="checkbox" aria-label="Menu" />
                <span></span>
                <span></span>
                <span></span>
                <ul>
                  <li><a href="./" translate="no">Home</a></li>{" "}
                  <li><a href="./live.html">Live</a></li>{" "}
                  <li><a href="./about-us.html">About us</a></li>{" "}
                  <li>
                    <a href="./">
                      <Img src={logoShort} alt="lesson in violence logo" priority />
                    </a>
                  </li>{" "}
                  <li><a href="./merch.html" translate="no">Merch</a></li>{" "}
                  <li><a href="./media.html">Media</a></li>{" "}
                  <li><a href="./downloads.html">Downloads</a></li>{" "}
                  {/* the social icons are direct children of the list (as in the original markup) */}
                  <a className={styles.socialIcon} href={INSTAGRAM} target="blank">
                    <i className="fa" title="Instagram"><FaInstagram /></i>
                  </a>{" "}
                  <a className={styles.socialIcon} href={FACEBOOK} target="blank">
                    <i className="fa" title="Facebook"><FaFacebookF /></i>
                  </a>
                </ul>
              </div>
            </nav>
            <Img
              id={styles.mobileLogo}
              src={logoLong}
              alt="Weißes Lesson in Violence Logo freigestellt"
              priority
              sizes="50vw"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
