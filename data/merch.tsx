import type { MerchItem } from "@/components/MerchProduct";
import cdNoNeedForDeath from "@/images/merchPictures/CDProductNoNeedForDeath.jpg";
import lpNoNeedForDeath from "@/images/merchPictures/LPProductNoNeedForDeath.jpg";
import cdThrashfall from "@/images/merchPictures/CDProdukt.jpg";
import shirtNbt from "@/images/merchPictures/productShirtNBT.jpg";
import shirtNbtFront from "@/images/merchPictures/frontNBT.jpg";
import shirtNbtBack from "@/images/merchPictures/backNBT.jpg";
import shirtLiv from "@/images/merchPictures/productShirt.jpg";
import shirtLivFront from "@/images/merchPictures/productShirtFront.jpg";
import shirtLivBack from "@/images/merchPictures/productShirtBack.jpg";
import shirtCd from "@/images/merchPictures/productShirtCD.jpg";
import shirtCdFront from "@/images/merchPictures/productCdShirtFront.jpg";
import shirtCdBack from "@/images/merchPictures/productCdShirtBack.jpg";
import ticketLim4 from "@/images/merchPictures/TicketLessonsInMetal4.jpg";
import ticketLim5 from "@/images/merchPictures/TicketLessonsInMetal5.jpg";
import patch from "@/images/merchPictures/SinglePatch.jpg";
import patches from "@/images/merchPictures/MultiplePatches.jpg";
import hipFlask from "@/images/merchPictures/hipFlask2.jpeg";
import hipFlask2 from "@/images/merchPictures/hipFlask.jpeg";

/*
 * Products on the merch page, one array per row.
 * Prices etc. are free JSX: <p>…</p> for normal text, plain text is a bit smaller.
 */

const price = (germany: string, worldwide: string) => (
  <p>
    Germany {germany}
    <br />
    Worldwide {worldwide}
  </p>
);

const sizes = (list: string[]) => (
  <>
    {list.map((size) => (
      <button key={size}>{size}</button>
    ))}
  </>
);

const SHIRT_COLUMNS = "col-11 col-sm-10 col-md-4 col-lg-4";

export const merchRows: { id?: string; hidden?: boolean; items: MerchItem[] }[] = [
  {
    items: [
      {
        title: "CD",
        image: cdNoNeedForDeath,
        details: [
          { label: "Title:", value: <p>No need for death</p> },
          { label: "Label:", value: <p>Iron Shield Records</p> },
          { label: "Price*:", value: price("15,- €", "17,- €") },
        ],
      },
      {
        title: "LP",
        image: lpNoNeedForDeath,
        details: [
          { label: "Title:", value: <p>No need for death</p> },
          { label: "Label:", value: <p>Iron Shield Records</p> },
          { label: "Price*:", value: price("25,- €", "35,- €") },
        ],
      },
    ],
  },
  {
    items: [
      {
        title: "CD",
        image: cdThrashfall,
        details: [
          { label: "Title:", value: <p>The Thrashfall of Mankind</p> },
          { label: "Label:", value: <p>Iron Shield Records</p> },
          { label: "Price*:", value: price("15,- €", "17,- €") },
        ],
      },
      {
        title: "T-SHIRT",
        columns: SHIRT_COLUMNS,
        image: shirtNbt,
        front: shirtNbtFront,
        back: shirtNbtBack,
        lightbox: true,
        details: [
          { label: "Title:", value: "Natural Born Thrasher" },
          { label: "Size:", value: sizes(["S", "M", "L", "XL", "XXL", "XXXL", "XXXXL", "XXXXXL"]) },
          { label: "Price*:", value: price("18,- €", "22,- €") },
        ],
      },
    ],
  },
  {
    items: [
      {
        title: "T-SHIRT",
        columns: SHIRT_COLUMNS,
        image: shirtLiv,
        front: shirtLivFront,
        back: shirtLivBack,
        lightbox: true,
        details: [
          { label: "Title:", value: "Lesson in Violence" },
          { label: "Size:", value: sizes(["M", "L", "XL"]) },
          { label: "Price*:", value: price("13,- €", "17,- €") },
        ],
      },
      {
        title: "T-SHIRT",
        columns: SHIRT_COLUMNS,
        image: shirtCd,
        front: shirtCdFront,
        back: shirtCdBack,
        lightbox: true,
        details: [
          { label: "Title:", value: "The Thrashfall of Mankind" },
          { label: "Size:", value: sizes(["S", "M", "L", "XL", "XXL", "XXXL"]) },
          { label: "Price*:", value: price("18,- €", "22,- €") },
        ],
      },
    ],
  },
  {
    items: [
      {
        title: "Ticket",
        id: "lim4ticketAnchor",
        hidden: true,
        columns: "col-11 col-sm-10 col-md-4 col-lg-4",
        image: ticketLim4,
        lightbox: true,
        details: [
          { label: "Event:", value: "Lessons in Metal 4" },
          { label: "Date:", value: "12.10.2024" },
          { label: "Bands:", value: "Lesson in Violence, Grindpad, Taskforce Toxicator, Campa" },
          { label: "Price*:", value: <p>16,- €<br /></p> },
        ],
      },
      {
        title: "Patch",
        image: patch,
        morePictures: [patches],
        lightbox: true,
        details: [
          { label: "Design:", value: <p>Each patch has an individual blood splash!</p> },
          { label: "Size:", value: <p>12cm x 6cm</p> },
          { label: "Price*:", value: price("6,- €", "7,- €") },
        ],
      },
      {
        title: "Hip Flask",
        image: hipFlask,
        morePictures: [hipFlask2],
        lightbox: true,
        details: [
          { label: "Design:", value: <p>Laser engraving</p> },
          { label: "Price*:", value: price("16,- €", "20,- €") },
        ],
      },
    ],
  },
  {
    // ticket for the next "Lessons in Metal" – shown when the pre-sale starts
    id: "LIM5Ticket",
    hidden: true,
    items: [
      {
        title: "Ticket",
        id: "lim5ticketAnchor",
        columns: "col-11 col-sm-10 col-md-4 col-lg-4",
        image: ticketLim5,
        lightbox: true,
        details: [
          { label: "Event:", value: "Lessons in Metal 5" },
          { label: "Date:", value: "25.10.2025" },
          { label: "Bands:", value: "Lesson In Violence, Exa, Grave Dogger, Wanted INC." },
          { label: "Price*:", value: <p>16,- €<br /></p> },
        ],
      },
    ],
  },
];
