import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Img from "./Img";
import CopyrightYear from "./CopyrightYear";
import styles from "./Footer.module.css";
import { BOOKING_EMAIL, CONTACT_EMAIL, FACEBOOK_URL, INSTAGRAM_URL, LINKTREE_URL } from "@/data/site";
import ironShield from "@/images/layoutPictures/IronShieldLogo.jpg";
import mdd from "@/images/layoutPictures/MDD Records.jpg";
import redstuff from "@/images/layoutPictures/Redstuff-logo-min.jpg";
import rausgegangen from "@/images/layoutPictures/logo_rausgegangen_freigeist.svg";
import linktree from "@/images/layoutPictures/Linktree.png";

const logoSizes = "(max-width: 767px) 40vw, 15vw";

/** Partner logos, two per row. */
const logoRows = [
  [
    {
      href: "https://www.ironshieldrecords.de/",
      img: { id: styles.ironShieldsLogo, placeholder: "empty", src: ironShield, alt: "Link to the homepage of iron shield records", title: "Iron Shield Record Homepage", sizes: logoSizes },
    },
    {
      href: "https://mdd-records.de/",
      img: { id: styles.mddRecordsLogo, placeholder: "empty", src: mdd, alt: "Link to the homepage of MDD records", title: "MDD Records Homepage", sizes: logoSizes },
    },
  ],
  [
    {
      href: "https://www.redstuff-amps.de/",
      img: { placeholder: "empty", src: redstuff, alt: "Link to the homepage of redstuff", title: "Redstuff Homepage", sizes: logoSizes },
    },
    {
      href: "https://www.rausgegangen.de",
      img: { id: styles.rausgegangenLogo, src: rausgegangen, alt: "Link to the homepage of rausgegangen", title: "Rausgegangen Homepage" },
    },
  ],
] as const;

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container-fluid">
        <div className="row">
          <div className={`col-md-4 col-sm-6 col-7 ${styles.columnContact}`}>
            <p>
              <span className={`red ${styles.footerTitle}`}>Contact</span>
              <br />
              <br />
              Roland Schäfer
              <br />
              Auenstraße 47
              <br />
              97456 Dittelbrunn (Germany)
              <br />
              Contact:{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} translate="no">
                {CONTACT_EMAIL}
              </a>
              <br />
              Booking:{" "}
              <a href={`mailto:${BOOKING_EMAIL}`} translate="no">
                {BOOKING_EMAIL}
              </a>
            </p>
          </div>

          <div className="col-md-8 col-sm-6 col-5">
            <div className={`row ${styles.footerRight}`}>
              <div className={`col-md-6 col-sm-12 col-12 ${styles.columnLogos}`}>
                {logoRows.map((row, i) => (
                  <div key={i} className={styles.logoRow}>
                    {row.map((logo) => (
                      <a key={logo.href} href={logo.href} target="blank">
                        <picture>
                          <Img {...logo.img} />
                        </picture>
                      </a>
                    ))}
                  </div>
                ))}
              </div>

              <div className={`col-md-6 col-sm-12 col-12 ${styles.columnSocial}`}>
                <p className={`red ${styles.footerTitle}`}>Follow us!</p>
                <a href={LINKTREE_URL} target="blank">
                  <picture>
                    <Img
                      id={styles.linktree}
                      sizes="200px"
                      src={linktree}
                      alt="Link to the Lesson in Violence profile on Linktree"
                      title="Linktree"
                    />
                  </picture>
                </a>{" "}
                <iframe
                  scrolling="no"
                  id={styles.bandcamp}
                  title="Follow Lesson in Violence on Bandcamp"
                  src="https://bandcamp.com/band_follow_button_deluxe/2963300290"
                  loading="lazy"
                ></iframe>{" "}
                <a href={INSTAGRAM_URL} target="blank">
                  <i className="fa" title="Instagram"><FaInstagram /></i>
                </a>{" "}
                <a href={FACEBOOK_URL} target="blank">
                  <i className="fa" title="Facebook"><FaFacebookF /></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={`row ${styles.copyright}`}>
          <div className="col">
            <a href="./legal-notice.html">Legal Notice</a>{" "}
            <a href="./legal-notice.html">Privacy Policy</a>{" "}
            <p id="copyright" translate="no">
              Copyright &copy; <CopyrightYear />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
