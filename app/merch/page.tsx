import type { Metadata } from "next";
import Page from "@/components/Page";
import Hero from "@/components/Hero";
import MerchProduct, { MerchRow } from "@/components/MerchProduct";
import { merchRows } from "@/data/merch";
import { defaultKeywords } from "@/data/seo";
import header from "@/images/headers/header-merch-min.jpg";

export const metadata: Metadata = {
  title: "Metal Merch",
  description: "Go checkout our merch! You can order t-shirts and our new album The Thrashfall of Mankind soon...",
  keywords: defaultKeywords,
};

export default function MerchPage() {
  return (
    <Page>
      <Hero title="About us" background={header.src} titleStyle="hidden" />

      <div id="mainContent" className="mainContent">
        <div className="mainContentInner">
          <section>
            {merchRows.map((row, i) => (
              <MerchRow key={i} id={row.id} hidden={row.hidden}>
                {row.items.map((item, j) => (
                  <MerchProduct key={j} item={item} />
                ))}
              </MerchRow>
            ))}
          </section>
        </div>

        <div style={{ margin: "0 3vw" }}>
          * Please note that all prices include shipping costs! Of course, if you order several items, the shipping
          costs will change to your advantage.
        </div>
      </div>
    </Page>
  );
}
