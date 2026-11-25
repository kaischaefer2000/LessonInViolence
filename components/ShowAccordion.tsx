"use client";

import { useState, type CSSProperties } from "react";
import { FaChevronDown } from "react-icons/fa";
import Img from "./Img";
import type { Show } from "@/data/shows";
import styles from "./ShowAccordion.module.css";

const cx = (...classes: (string | false | undefined)[]) => classes.filter(Boolean).join(" ");

/** One concert: a clickable row that expands the details (location, bands, flyer, tickets). */
export default function ShowAccordion({ show, over }: { show: Show; over: boolean }) {
  const [open, setOpen] = useState(false);
  const [flyerZoomed, setFlyerZoomed] = useState(false);

  const toggle = () => setOpen((o) => !o);

  // enlarge / shrink the flyer on click (only on desktop)
  const zoomFlyer = () => {
    if (window.matchMedia("(min-width: 750px)").matches) setFlyerZoomed((z) => !z);
  };
  const flyerStyle: CSSProperties | undefined = flyerZoomed
    ? { width: show.flyer?.zoomWidth ?? "30vw", transition: "width 0.8s ease-in-out" }
    : undefined;

  const labelCol = show.legacyLayout ? "col-3 col-md-3 col-lg-2" : "col-5 col-sm-3 col-lg-2";
  const valueCol = show.legacyLayout ? "col-9 col-md-9 col-lg-10" : "col-7 col-sm-9 col-lg-10";

  const flyerRow = show.flyer && (
    <div className={`row ${styles.detailsContent} ${styles.flyerRow}`}>
      <div className="col-12 col-sm-3 col-lg-2">
        <p>Flyer:</p>
      </div>
      <div className="col-12 col-sm-9 col-lg-10">
        <Img
          src={show.flyer.src}
          alt={show.flyer.alt}
          onClick={zoomFlyer}
          style={flyerStyle}
          sizes="(min-width: 750px) 45vw, 70vw"
        />
      </div>
    </div>
  );

  const ticket = show.ticket;
  const external = ticket?.url?.startsWith("http") || ticket?.url?.startsWith("mailto:");
  const ticketRow = ticket && (
    <div className={`row ${styles.detailsContent}`}>
      <div className="col-12">
        {ticket.url ? (
          <a className={styles.ctaTicket} href={ticket.url} target={external ? "_blank" : undefined}>
            {ticket.label}{" "}
            <i className={`fa ${styles.arrow} ${styles.ticketArrow}`}><FaChevronDown /></i>
          </a>
        ) : (
          <a className={`${styles.ctaTicket} ${styles.disabledTicket}`}>
            {ticket.label}{" "}
            <i className={`fa ${styles.arrow} ${styles.ticketArrow} ${styles.disabledArrow}`}>
              <FaChevronDown />
            </i>
          </a>
        )}
      </div>
      {show.qrCode && (
        <div className={`col-12 ${styles.qrCode}`}>
          <label>Or scan the QR code:</label>
          <Img src={show.qrCode.src} alt={show.qrCode.alt} />
        </div>
      )}
    </div>
  );

  return (
    <section>
      <div
        className={cx("row", styles.accordionItem, styles.show, over && styles.over, open && styles.active)}
        role="button"
        tabIndex={0}
        aria-expanded={open}
        onClick={toggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggle();
          }
        }}
      >
        <div className="col-11">
          <p>{show.date}</p> <p></p>{" "}
          <p translate={show.nameNoTranslate ? "no" : undefined}>{show.name}</p>
        </div>
        <div className="col-1">
          <i className={cx("fa", styles.arrow, over && styles.over)}><FaChevronDown /></i>
        </div>
      </div>

      <div
        className={`row ${styles.accordionItem} ${styles.details}`}
        style={open ? { display: "block" } : undefined}
      >
        <div className="col">
          <div>
            <div className={`row ${styles.detailsContent}`}>
              <div className={labelCol}>
                <p>Location:</p>
              </div>
              <div className={valueCol}>
                <p>{show.location}</p>
              </div>
            </div>

            <div className={`row ${styles.detailsContent}`}>
              <div className={labelCol}>
                <p translate="no">Bands:</p>
              </div>
              <div className={valueCol}>
                <p translate="no">{show.bands}</p>
              </div>
            </div>

            {show.ticketBeforeFlyer ? <>{ticketRow}{flyerRow}</> : <>{flyerRow}{ticketRow}</>}

            {show.moreDetailsUrl && (
              <div className={`row ${styles.detailsContent}`}>
                <div className="col">
                  <a rel="nofollow" href={show.moreDetailsUrl} target="blank">
                    <u>More details</u>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
