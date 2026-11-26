import { Fragment } from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Img from "./Img";
import styles from "./Header.module.css";
import { FACEBOOK_URL, INSTAGRAM_URL } from "@/data/site";
import logoShort from "@/images/layoutPictures/LIV-logo-kurz.png";
import logoLong from "@/images/layoutPictures/Logo-weiss-freigestellt-lang.png";

type NavLink = { href: string; label: string; noTranslate?: boolean };

// left and right of the logo
const navLeft: NavLink[] = [
  { href: "./", label: "Home", noTranslate: true },
  { href: "./live.html", label: "Live" },
  { href: "./about-us.html", label: "About us" },
];
const navRight: NavLink[] = [
  { href: "./merch.html", label: "Merch", noTranslate: true },
  { href: "./media.html", label: "Media" },
  { href: "./downloads.html", label: "Downloads" },
];

const navItem = ({ href, label, noTranslate }: NavLink) => (
  <Fragment key={href}>
    <li><a href={href} translate={noTranslate ? "no" : undefined}>{label}</a></li>{" "}
  </Fragment>
);

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
                  {navLeft.map(navItem)}
                  <li>
                    <a href="./">
                      <Img src={logoShort} alt="lesson in violence logo" priority />
                    </a>
                  </li>{" "}
                  {navRight.map(navItem)}
                  {/* social icons, only visible in the mobile menu */}
                  <li className={styles.socialItem}>
                    <a className={styles.socialIcon} href={INSTAGRAM_URL} target="blank" aria-label="Instagram">
                      <i className="fa" title="Instagram"><FaInstagram /></i>
                    </a>{" "}
                    <a className={styles.socialIcon} href={FACEBOOK_URL} target="blank" aria-label="Facebook">
                      <i className="fa" title="Facebook"><FaFacebookF /></i>
                    </a>
                  </li>
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
