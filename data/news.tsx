import { NewsAlbumCover, NewsPicture, NewsPictureColumn, type NewsItem } from "@/components/News";
import lim5 from "@/images/homeAssets/L.I.M_5.jpg";
import thrashTalk from "@/images/flyer/ThrashTalkFlyer.jpeg";
import lim4Ticket from "@/images/merchPictures/Eintrittskarte_Final_LIM4 Muster.jpg";
import rockMetalDays from "@/images/flyer/Rock&MetalDays.jpg";
import noNeedForDeath from "@/images/homeAssets/CoverNoNeedForDeath.jpg";
import bandBlackWhite from "@/images/homeAssets/band-black-white-Website.png";
import scraper from "@/images/homeAssets/Scraper.jpg";
import zykloopenAir from "@/images/flyer/Flyer Zykloopen Air.jpg";
import metalMassacre from "@/images/flyer/FlyerMetalMassacer.jpeg";
import lim2 from "@/images/flyer/Flyer Lessons in Metal 2.jpg";
import casting1 from "@/images/homeAssets/castingPicture1.jpg";
import casting2 from "@/images/homeAssets/castingPicture2.jpg";
import casting3 from "@/images/homeAssets/castingPicture3.jpg";
import casting4 from "@/images/homeAssets/castingPicture4.jpg";
import michi from "@/images/members/MichiLive.jpeg";
import mff2022 from "@/images/flyer/Flyer_MFF.jpg";
import cdCover from "@/images/homeAssets/cdCover.jpg";
import ironShieldsDeal from "@/images/homeAssets/LIV-ironshields-deal.jpg";

/*
 * News on the home page, newest first. The first three are shown, the rest
 * appear after clicking "Show more...".
 *
 * To add a news post, copy the first entry and put it at the top of the list.
 * Pictures go into images/ and are imported above.
 */
export const news: NewsItem[] = [
  {
    date: "20.06.2026",
    spaceBetween: true,
    text: (
      <>
        Due to health issues, we had to cancel our shows in the first half of 2026. Now we&apos;re back, fully
        charged, and ready to thrash! Check out our <a href="live.html">concerts in fall</a> and see you in the pit.
      </>
    ),
  },
  {
    date: "31.11.2025",
    text: (
      <>
        Thanxs to EXA, GRAVE DOGGER and WANTED INC. for their great performance, to the team from STATTBAHNHOF
        Schweinfurt, STURMI´S Rock and Metal Page and of course to all thrashers for an unforgetable LESSON IN METAL 5.
      </>
    ),
    aside: <NewsPicture src={lim5} alt="Band with crowd in the background from lessons in metal 5" width="40%" />,
  },
  {
    date: "21.04.2025",
    spaceBetween: true,
    text: (
      <>
        Hey Metalheads, thanks for the amazing shows this spring - it was awesome!
        <br />
        We&apos;re taking a break this summer to focus on writing songs for our 3rd longplayer. The first shows for
        the fall are planned, and then we will really thrash again.
        <br />
        Hope to see you there!
        <br />
      </>
    ),
  },
  {
    date: "30.10.2024",
    text: (
      <>
        Thanks to all the thrashers out there for an awesome year!
        <br />
        <br />
        Use your chance to thrash with us one more time this year at our last show before the winter break at
        the <a href="live.html">Thrash Talk</a> in Berlin.
      </>
    ),
    aside: <NewsPicture src={thrashTalk} alt="Flyer for the Thrash Talk gig" width="40%" />,
  },
  {
    date: "08.08.2024",
    spaceBetween: true,
    text: (
      <>
        The pre-sale for the Lessons in Metal 4 has started.
        <br />
        <a href="merch.html">Get your ticket</a>
      </>
    ),
    aside: <NewsPicture src={lim4Ticket} alt="Ticket for the show Lessons in Metal 4" width="30%" />,
  },
  {
    date: "22.05.2024",
    text: (
      <>
        Our next show at{" "}
        <a href="https://www.rmd-festival.de/" target="_blank">
          Rock &amp; Metal Day&apos;z
        </a>{" "}
        in Oschersleben will be something very special for us.{" "}
        <a
          href="https://mfoa.tickettoaster.de/produkte/150-tickets-rock-metal-day-z-2024-motorsportarena-oschersleben-oschersleben-am-27-06-2024"
          target="_blank"
        >
          {" "}
          Get your ticket
        </a>{" "}
        for this amazing festival.
      </>
    ),
    aside: <NewsPicture src={rockMetalDays} alt="Flyer for the festival Rock & Metal Days" width="40%" />,
  },
  {
    date: "05.02.2024",
    text: (
      <>
        Prepare yourself for March 30st 2024! <br />
        On this day we will release our second full-length-album &apos;no need for death&apos; under Iron Shield
        Records! <br />
        Be in joyful expectation for there will be eleven tracks that will make you wanna bang your head.
        <br />
        <a href="merch.html"> Pre-orders are now possible. </a>
      </>
    ),
    aside: (
      <NewsPicture
        src={noNeedForDeath}
        alt="Cover of the album no need for death"
        width="40%"
        intrinsic={{ width: 732, height: 744 }}
      />
    ),
  },
  {
    date: "10.11.2023",
    text: (
      <>
        Hey Maniacs,
        <br />
        after thrashtastic shows in fall 2023, we would like to thank you for your amazing support! Besides we inform
        you that recordings for our upcoming album are about to be finished. Our second Album &quot;no need for
        death&quot; will be released via &apos;Iron Shield Records&apos; in the first half of 2024. Prepare for even
        more thrashier riffs, faster beats and a new level of violence!
      </>
    ),
  },
  {
    date: "23.07.2023",
    text: (
      <>
        Hey thrashers,
        <br />
        <br />
        we want to introduce you to our new colleague on the drums. In the picture on the far left, please welcome:
        Gareth &quot;Hotte&quot; Lathan!
        <br />
        <br />
        We are already working with Hotte on our second album which will be released in 2024. Thrash on!
      </>
    ),
    aside: (
      <NewsPicture
        src={bandBlackWhite}
        alt="Band picture of lesson in violence in black and white"
        width="50%"
        mobileMinWidth="50%"
      />
    ),
  },
  {
    date: "14.07.2023",
    text: (
      <>
        An era is coming to an end!
        <br />
        From the very beginning of Lesson In Violence our man on the drums has always been a true thrash-disciple and
        still is. Scraper played a big role in the last years of Lesson In Violence and we were very glad and proud
        that we thrashed together!
        <br />
        Scraper is retiring from Lesson In Violence and we wish him all the best!
      </>
    ),
    aside: <NewsPicture src={scraper} alt="Retirement of drummer Scraper" width="70%" mobileMinWidth="50%" />,
  },
  {
    date: "24.03.2023",
    text: (
      <>
        Hi Metalheads, take a look at this line-up, what a mess! Time to grab your tickets and thrash the shit out of
        the Zykloopen-Air!
        <br />
        <br />
        <a href="https://www.facebook.com/events/568788995020320" target="blank">
          {" "}
          Check it out &gt;{" "}
        </a>
      </>
    ),
    aside: <NewsPicture src={zykloopenAir} alt="Flyer Zykloopenair" width="30%" mobileMinWidth="50%" />,
  },
  {
    date: "23.01.2023",
    text: (
      <>
        Yeah!!!
        <br />
        This is going to be an epic metal night! We are very pleased that the guys from Hatred have invited us to
        their resurrection.
        <br />
        <br />
        <a href="https://www.facebook.com/events/581067580528085/?ref=newsfeed" target="blank">
          {" "}
          Check it out &gt;{" "}
        </a>
      </>
    ),
    aside: <NewsPicture src={metalMassacre} alt="Flyer Metal Massacer" width="30%" mobileMinWidth="50%" />,
  },
  {
    date: "18.12.2022",
    text: (
      <>
        How cool is that?{" "}
        <a href="https://www.facebook.com/sturmiingolstadt" target="blank">
          Sturmi&apos;s Rock and Metal page
        </a>{" "}
        declares our debut album &apos;The Thrashfall Of Mankind&apos; as the best thrash-album of 2022. So that&apos;s
        some awesome news, thanks for aprreciating our work! In addition, Markus P. from &quot;Time for Metal&quot;
        fanzine has named our album as &quot;Album of the Year 2022&quot; <br />
        With our upcoming album we won&apos;t settle for less than keeping the first place!
      </>
    ),
  },
  {
    date: "14.09.2022",
    text: (
      <>
        Prepare for attack!
        <br />
        <br />
        On October 2nd of this year, there will be the most thrashful event of the year!
        <br />
        <br />
        Join Lesson In Violence, Hateful Agony, REACTORY and Godslave when they meet up to crush the Stattbahnhof
        Schweinfurt!
        <br />
        <br />
        The pre-sale ended on 27 Sept, tickets are only available at the evening box office.
      </>
    ),
    aside: <NewsPicture src={lim2} alt="Flyer Lessons in Metal 2" width="30%" mobileMinWidth="50%" />,
  },
  {
    date: "17.08.2022",
    text: (
      <>
        Thank you metalheads,
        <br />
        it was amazing how many of you sent us some pics to create{" "}
        <a href="https://www.youtube.com/watch?v=2Y81kLYrfS0" target="blank">
          our new video
        </a>
        ! We really appreciate your support! It&apos;s not a typical lyric-video how everyone else does it these days.
        We made a picture-video and we definitely don’t take things too serious! Many of the pics you sent were from
        earlier times so we tried to capture this spirit with the style of our video and kept it intentionally
        old-fashioned and different. So please enjoy our{" "}
        <a href="https://www.youtube.com/watch?v=2Y81kLYrfS0" target="blank">
          pic-vid spiced with lyrics
        </a>
        !
      </>
    ),
  },
  {
    date: "06.05.2022",
    text: (
      <>
        We need you!
        <br />
        &apos;Lesson In Violence&apos; is planning to create a music video for the album &apos;The Thrashfall Of
        Mankind&apos; and you shall be the the main actors! <br />
        So if you want to be part of it, just send us your most thrashy selfies. No matter if &apos;horns up in the
        bathtub&apos; or with a beer in or below your camping-chair, headbanging or hugging the toilet. Feel free!{" "}
        <br />
        We need about 300 pics to be ready, so don&apos;t hold yourselfes back! Best send your pics in landscape format
        and please take note, that we can&apos;t use bandpics. Please make sure, that there is only yourself to be seen
        in the pictures. <br />
        So if you&apos;re in, send your pictures to{" "}
        <a href="mailto:casting@lessoninviolence.com">casting@lessoninviolence.com</a>. <br />
        To thank you, we will give you our next single before the second album will be released. <br />
        Your mail will be answered with further notice for privacy terms etc. <br />
        We added some examples to give you some inspiration!
      </>
    ),
    aside: (
      <NewsPictureColumn
        pictures={[casting1, casting2, casting3, casting4].map((src) => ({
          src,
          alt: "Casting picture example for music video",
        }))}
      />
    ),
  },
  {
    date: "14.04.2022",
    text: (
      <>
        Hello Folks,
        <br />
        <br />
        we got some news for you. &apos;Lesson In Violence&apos; has a new man on the guitar. His name is &apos;Michael
        Helbig&apos; and he has always been a good friend and a supporter of our music. One of the main reason for
        recruiting him is that he is as much a thrash-enthusiast as the rest of &apos;Lesson In Violence&apos;. He
        first joined the stage with us on the &apos;Metal Franconia Festival 2022&apos; and did a really awesome job.{" "}
        <br />
        <br />
        We also want to thank our former guitar-hero André for the good times we had together and all the efforts he
        brought into &apos;Lesson In Violence&apos; and the first album &apos;The Thrashfall of Mankind&apos;. “This is
        sure your baby too!” <br />
        <br />
        We decided to go different ways because we faced some different focuses and visions of what the future will
        hold. Dear André, we wish you all the best for your projects and &apos;Lesson In Violence&apos; is sure to meet
        up with you somewhere in time.
      </>
    ),
    aside: (
      <NewsAlbumCover
        src={michi}
        alt="Michi member of Lesson in Violence"
        imgStyle="flyer"
        intrinsic={{ width: 546, height: 740 }}
      />
    ),
  },
  {
    date: "13.03.2022",
    text: (
      <>
        One month is gone since we released our first album &quot;The Thrashfall Of Mankind&quot; and the feedback is
        absolutely amazing. Reviews worldwide are very good and the sales charts are also very impressive! Lesson in
        Violence want to say thank you for this huge amount of support and appreciation from fans, mags and radio
        stations all around the world.
        <br />
        <br />
        Right now we are looking forward to present the album live to the crowds! <br />
        Next stop:{" "}
        <a target="blank" href="https://sw.metal-franconia.de/">
          Metal Franconia Festival 2022
        </a>
        .<br />
        <br />
        Thrash on!
      </>
    ),
    aside: <NewsAlbumCover src={mff2022} alt="Flyer Lessons in Metal 2" imgStyle="flyer" />,
  },
  {
    date: "16.01.2022",
    text: (
      <>
        Listen metalheads!
        <br />
        <br />
        Lesson in Violence is proud to announce the release-date of our first thrash metal baby &quot;The Thrashfall of
        Mankind&quot; by Iron Shield Records.
        <br />
        On february 18th the time has come for our debut album including 11 tracks of serious thrash metal shit.
        <br />
        <br />
        Listen to our <a href="./media.html#mainContent">audio samples!</a>
        <br />
        <br />
        You can order our full length album &quot;The Thrashfall of Mankind&quot; directly from our{" "}
        <a href="./merch.html">merchandising-page</a> or from our label{" "}
        <a target="blank" href="https://www.ironshieldrecords.de/contact.html">
          Iron Shield Records
        </a>
        .<br />
        <br />
      </>
    ),
    aside: (
      <NewsAlbumCover src={cdCover} alt="Thrashfall of Mankind Album Cover" intrinsic={{ width: 698, height: 673 }} />
    ),
  },
  {
    date: "20.11.2021",
    text: (
      <>
        Hey Headbangers and thrash metal enthusiasts!
        <br />
        <br />
        Lesson in Violence is very happy to announce the deal with{" "}
        <a href="https://www.ironshieldrecords.de/" target="blank">
          Iron Shield Records
        </a>
        . A label for the finest selection of old school thrash metal from berlin!
        <br />
        Thomas Dargel, head of{" "}
        <a href="https://www.ironshieldrecords.de/" target="blank">
          Iron Shield Records
        </a>{" "}
        is a great thrash metal fan so we joined forces!
        <br />
        <br />
        We can&apos;t wait to blast our album &quot;the thrashfall of mankind&quot; through your speakers and return to
        the stage!
        <br />
        <br />
        Thrash Metal Mankind!
      </>
    ),
    aside: (
      <NewsAlbumCover
        src={ironShieldsDeal}
        alt="Thrashfall of Mankind Album Cover"
        imgStyle="albumCover"
        intrinsic={{ width: 900, height: 914 }}
      />
    ),
  },
  {
    date: "10.11.2021",
    layout: "textOnly",
    text: (
      <>
        Hey Folks!
        <br />
        <br />
        Lesson in Violence is proud to tell you, that the work for our first album &quot;the thrashfall of
        mankind&quot; is taking progress and it will be released in Q1 2022!
        <br />
        Prepare yourself for 11 tracks full of finest thrash metal and stay tuned for more updates!
        <br />
        <br />
        Thrash Metal Mankind!
      </>
    ),
  },
  {
    date: "26.06.2021",
    layout: "oldest",
    text: (
      <>
        Listen you metalheads out there!
        <br />
        <br />
        During this fucking pandemic we were literally imprisoned but we used the time to set up the recording of our
        first album. So we tried to make the best out of it and now we are done with most of the recordings. Right now
        we are recording the vocals. When it&apos;s done there will be only backing vocals left. After that it will
        take time to mix a sound, that will blow everyones mind.
        <br />
        As you can see, the process is going on and is pretty much advanced. When we are done we will chose the songs
        for our album wisely, that you get the full package of our thrash enthusiasm!
        <br />
        We can´t wait to return to the stage, hopefully in 2021. Till then, don&apos;t bother yourselves too much
        because of all the shit that&apos;s going on. Just think to yourself „ALL YOU NEED IS THRASH“!
      </>
    ),
  },
  {
    date: "02.06.2020",
    layout: "oldest",
    text: (
      <>
        Bad news: All shows in 2020 were rescheduled to 2021 due to Covid19.
        <br />
        Just check our dates for the <a href="./live.html">upcoming shows</a> in 2021. Right now we work on our first
        album to be published next year!
      </>
    ),
  },
  {
    date: "10.03.2020",
    layout: "oldest",
    text: (
      <>
        Our show at the Metal Franconia Festival 2020 was cancelled in connection with the upcoming Corona Epidemic.
        The replacement date will be in 2021.
      </>
    ),
  },
  {
    date: "04.12.2019",
    layout: "oldest",
    text: (
      <>
        Thanks a lot for the great support on our first show in our hometown!
        <br />
        Click <a href="media.html#jugendhaus2019">here</a> for the pictures!
      </>
    ),
  },
  {
    date: "26.10.2019",
    layout: "oldest",
    text: (
      <>
        We&apos;re glad to announce our first hometown-show in Schweinfurt, where we can blast your faces off with our
        brandnew set of pure fuckin&apos; thrash!
        <br />
        Goregonzola, Insulter and April in Flames will join the show!
        <span translate="no"> Be there!</span>
      </>
    ),
  },
  {
    date: "19.07.2019",
    layout: "oldest",
    text: (
      <>
        Welcome!
        <br />
        We are very proud to present our new Thrash Metal Formation to you.
        <br />
        It is time to teach you a LESSON IN VIOLENCE !
      </>
    ),
  },
];
