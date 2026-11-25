import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Img from "./Img";
import CopyrightYear from "./CopyrightYear";
import styles from "./Footer.module.css";
import ironShield from "@/images/layoutPictures/IronShieldLogo.jpg";
import mdd from "@/images/layoutPictures/MDD Records.jpg";
import redstuff from "@/images/layoutPictures/Redstuff-logo-min.jpg";
import rausgegangen from "@/images/layoutPictures/logo_rausgegangen_freigeist.svg";
import linktree from "@/images/layoutPictures/Linktree.png";

const LINKTREE =
  "https://linktr.ee/lessoninviolencebandofficial?utm_source=linktree_profile_share&ltsid=56af9a90-a0c5-41c6-877f-d2907dfa2aeb";

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
              <a href="mailto:contact@lessoninviolence.com" translate="no">
                contact@lessoninviolence.com
              </a>
              <br />
              Booking:{" "}
              <a href="mailto:booking@lessoninviolence.com" translate="no">
                booking@lessoninviolence.com
              </a>
            </p>
          </div>

          <div className="col-md-8 col-sm-6 col-5">
            <div className={`row ${styles.footerRight}`}>
              <div className={`col-md-6 col-sm-12 col-12 ${styles.columnLogos}`}>
                <div className={styles.logoRow}>
                  <a href="https://www.ironshieldrecords.de/" target="blank">
                    <picture>
                      <Img
                        id={styles.ironShieldsLogo}
                        placeholder="empty"
                        src={ironShield}
                        alt="Link to the homepage of iron shield records"
                        title="Iron Shield Record Homepage"
                        sizes="(max-width: 767px) 40vw, 15vw"
                      />
                    </picture>
                  </a>
                  <a href="https://mdd-records.de/" target="blank">
                    <picture>
                      <Img
                        id={styles.mddRecordsLogo}
                        placeholder="empty"
                        src={mdd}
                        alt="Link to the homepage of MDD records"
                        title="MDD Records Homepage"
                        sizes="(max-width: 767px) 40vw, 15vw"
                      />
                    </picture>
                  </a>
                </div>
                <div className={styles.logoRow}>
                  <a href="https://www.redstuff-amps.de/" target="blank">
                    <picture>
                      <Img
                        placeholder="empty"
                        src={redstuff}
                        alt="Link to the homepage of redstuff"
                        title="Redstuff Homepage"
                        sizes="(max-width: 767px) 40vw, 15vw"
                      />
                    </picture>
                  </a>
                  <a href="https://www.rausgegangen.de" target="blank">
                    <picture>
                      <Img
                        id={styles.rausgegangenLogo}
                        src={rausgegangen}
                        alt="Link to the homepage of rausgegangen"
                        title="Rausgegangen Homepage"
                      />
                    </picture>
                  </a>
                </div>
              </div>

              <div className={`col-md-6 col-sm-12 col-12 ${styles.columnSocial}`}>
                <p className={`red ${styles.footerTitle}`}>Follow us!</p>
                <a href={LINKTREE} target="blank">
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
                <a href="https://www.instagram.com/lessoninviolencebandofficial/" target="blank">
                  <i className="fa" title="Instagram"><FaInstagram /></i>
                </a>{" "}
                <a href="https://www.facebook.com/lessoninviolencebandofficial/" target="blank">
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
