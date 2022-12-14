import React, { useEffect, useState } from "react";
import News from "./News";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";

const NewsContainer = (props) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [postPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  // let data = {
  //   status: "ok",
  //   totalResults: 36,
  //   articles: [
  //     {
  //       source: {
  //         id: null,
  //         name: "As.com",
  //       },
  //       author: "Maite Knorr-Evans",
  //       title:
  //         "Social Security COLA 2023 release, live online: estimate, adjustment and inflation relief checks | SSA updates - AS USA",
  //       description:
  //         "The Social Security Administration will announce the 2023 Cost-of-living adjustment. When and how much will it be?",
  //       url: "https://en.as.com/latest_news/social-security-cola-2023-release-live-online-estimate-adjustment-and-inflation-relief-checks-ssa-updates-n-2/",
  //       urlToImage:
  //         "https://img.asmedia.epimg.net/resizer/GT5O7jsmGNXHvNT8pdGkyuPY3xc=/644x362/filters:focal(481x143:491x153)/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/77BN3YAW4ZBZTMF5KTJRXHCTNI.jpg",
  //       publishedAt: "2022-10-13T10:44:21Z",
  //       content:
  //         "In anticipation of the 2023 Social Security COLA announcement, Democrats are going on the attack. \r\nRhode Island Senator Sheldon Whitehouse sent a tweet calling out Republican plans to make cuts to S… [+685 chars]",
  //     },
  //     {
  //       source: {
  //         id: "cnn",
  //         name: "CNN",
  //       },
  //       author: "Tara Subramaniam, Jack Guy",
  //       title: "Russia's war in Ukraine: Live updates - CNN",
  //       description:
  //         "The UN General Assembly overwhelmingly approved a resolution telling Russia its annexation of four Ukrainian zones is illegal as NATO defense ministers reaffirmed their commitment to support Kyiv with military aid.  Follow live updates here.",
  //       url: "https://www.cnn.com/europe/live-news/russia-ukraine-war-news-10-13-22/index.html",
  //       urlToImage:
  //         "https://media.cnn.com/api/v1/images/stellar/prod/221012073627-soldier-shoots-down-russian-missile.jpg?c=16x9&q=w_800,c_fill",
  //       publishedAt: "2022-10-13T10:38:00Z",
  //       content:
  //         "Russian President Vladimir Putin said that Moscow is making every effort to provide critical products to countries impacted by recent volatility in prices, while speaking at a summit in Kazakhstan on… [+2050 chars]",
  //     },
  //     {
  //       source: {
  //         id: null,
  //         name: "Eonline.com",
  //       },
  //       author: "Kelly Gilmore",
  //       title:
  //         "Kim Kardashian Reveals the Sex With Pete Davidson That Was Inspired by Her Grandma MJ - E! NEWS",
  //       description:
  //         "Kim Kardashian and Pete Davidson had one hot stay at the Beverly Hills Hotel. During an episode of The Kardashians, Kim had this to say about their fire sex life.",
  //       url: "https://www.eonline.com/news/1349814/kim-kardashian-reveals-the-sex-with-pete-davidson-that-was-inspired-by-her-grandma-mj",
  //       urlToImage:
  //         "https://akns-images.eonline.com/eol_images/Entire_Site/2022611/rs_1200x1200-220711140017-kim-and-pete.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top",
  //       publishedAt: "2022-10-13T10:32:46Z",
  //       content:
  //         "Kim Kardashian set the world ablaze with this confession.\r\nThe SKIMS founder got candid on her sex life during the Oct. 13 episode of The Kardashians, sharing where she and her then-boyfriend Pete Da… [+764 chars]",
  //     },
  //     {
  //       source: {
  //         id: null,
  //         name: "Investor's Business Daily",
  //       },
  //       author: "Investor's Business Daily",
  //       title:
  //         "Dow Jones Futures Rise Ahead Of CPI Inflation Report; Investors Avoid This Mistake | Investor's Business Daily - Investor's Business Daily",
  //       description:
  //         "At least stocks aren't rallying into Fed-critical economic news.",
  //       url: "https://www.investors.com/market-trend/stock-market-today/dow-jones-futures-rise-ahead-of-cpi-inflation-report-investors-avoid-mistake/",
  //       urlToImage:
  //         "https://www.investors.com/wp-content/uploads/2016/03/IC-fieldguide-031116-shutterstock.jpg",
  //       publishedAt: "2022-10-13T10:09:00Z",
  //       content:
  //         "Dow Jones futures rose slightly early Thursday, along with S&amp;P 500 futures and Nasdaq futures. All eyes turn to the September CPI inflation report this morning.\r\nXThe stock market was relatively … [+9619 chars]",
  //     },
  //     {
  //       source: {
  //         id: null,
  //         name: "CNBC",
  //       },
  //       author: "Holly Ellyatt",
  //       title:
  //         "Kamikaze drones and missiles hit Ukraine's north and south; Putin could discuss peace talks with Turkey's president - CNBC",
  //       description:
  //         'Ukraine has been faced with more attacks overnight, with critical infrastructure in the Kyiv region hit by drones and Mykolaiv in the south "massively shelled."',
  //       url: "https://www.cnbc.com/2022/10/13/russia-ukraine-live-updates.html",
  //       urlToImage:
  //         "https://image.cnbcfm.com/api/v1/image/107121790-1663737204555-gettyimages-1243390963-RUS_Russian_President_Putin_Attends_Official_Events_In_Moscow.jpeg?v=1665649414&w=1920&h=1080",
  //       publishedAt: "2022-10-13T08:23:00Z",
  //       content:
  //         "Russian President Vladimir Putin is expected to meet Turkey's President Recep Tayyip Erdogan on Thursday. It's expected that Turkey could formally offer to host peace talks between Russia and the Wes… [+2000 chars]",
  //     },
  //     {
  //       source: {
  //         id: null,
  //         name: "SciTechDaily",
  //       },
  //       author: null,
  //       title:
  //         "Explosion Imminent: Massive Stars Sound Warning They Are About To Go Supernova - SciTechDaily",
  //       description:
  //         "Astronomers from Liverpool John Moores University and the University of Montpellier have devised an ‘early warning’ system to sound the alert when a massive star is about to end its life in a supernova explosion. The work was published today (October 13, 2022…",
  //       url: "https://scitechdaily.com/explosion-imminent-massive-stars-sound-warning-they-are-about-to-go-supernova/",
  //       urlToImage:
  //         "https://scitechdaily.com/images/Betelgeuse-Supernova-Illustration.jpg",
  //       publishedAt: "2022-10-13T08:00:17Z",
  //       content:
  //         "An artists impression of Betelgeuses supernova. Credit: European Southern Observatory/L. Calçada\r\nAstronomers from Liverpool John Moores University and the University of Montpellier have devised an e… [+2335 chars]",
  //     },
  //     {
  //       source: {
  //         id: "reuters",
  //         name: "Reuters",
  //       },
  //       author: null,
  //       title:
  //         "North Korea says it practiced firing nuclear-capable cruise missiles - Reuters",
  //       description:
  //         "North Korean leader Kim Jong Un oversaw the launch of two long-range strategic cruise missiles, state media reported on Thursday, calling it a test to confirm the reliability and operation of nuclear-capable weapons deployed to military units.",
  //       url: "https://www.reuters.com/world/asia-pacific/nkorean-leader-guided-test-firing-long-range-strategic-cruise-missiles-state-2022-10-12/",
  //       urlToImage:
  //         "https://www.reuters.com/resizer/ilVPmpbT5oM_Tn-71Vms86rpYto=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/PEB7XAQVHBLDFPOTZRMAPZVAOE.jpg",
  //       publishedAt: "2022-10-13T07:30:00Z",
  //       content:
  //         "SEOUL, Oct 13 (Reuters) - North Korean leader Kim Jong Un oversaw the launch of two long-range strategic cruise missiles, state media reported on Thursday, calling it a test to confirm the reliabilit… [+4985 chars]",
  //     },
  //     {
  //       source: {
  //         id: "reuters",
  //         name: "Reuters",
  //       },
  //       author: null,
  //       title:
  //         "TSMC cuts capex on inflation worries after posting 80% profit jump - Reuters",
  //       description:
  //         'Taiwanese chipmaker TSMC <Link to={}"https://www.reuters.com/companies/2330.TW" target="_blank">(2330.TW)</Link> cut its annual investment budget by at least 10% for 2022 and struck a more cautious note than usual on upcoming demand, flagging challenges from rising…',
  //       url: "https://www.reuters.com/technology/tsmc-q3-profit-jumps-80-beats-market-expectations-2022-10-13/",
  //       urlToImage:
  //         "https://www.reuters.com/resizer/HIyRT0jByIBPg_tDQRXkMP0xMKI=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/OWWX2HDKHJJ23A6G4Z6X25FYQU.jpg",
  //       publishedAt: "2022-10-13T07:17:00Z",
  //       content:
  //         "TAIPEI, Oct 13 (Reuters) - Taiwanese chipmaker TSMC (2330.TW) cut its annual investment budget by at least 10% for 2022 and struck a more cautious note than usual on upcoming demand, flagging challen… [+3976 chars]",
  //     },
  //     {
  //       source: {
  //         id: null,
  //         name: "YouTube",
  //       },
  //       author: null,
  //       title: "Canucks @ Oilers 10/12 | NHL Highlights 2022 - NHL",
  //       description: null,
  //       url: "https://www.youtube.com/supported_browsers?next_url=https:%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DtuMgiz8JhsA",
  //       urlToImage: null,
  //       publishedAt: "2022-10-13T05:38:47Z",
  //       content:
  //         "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later",
  //     },
  //     {
  //       source: {
  //         id: null,
  //         name: "YouTube",
  //       },
  //       author: null,
  //       title:
  //         "Padres vs. Dodgers NLDS Game 2 Highlights (10/12/22)| MLB Highlights - MLB",
  //       description:
  //         "Padres vs Dodgers full game highlights from 10/12/22, presented by @Chevrolet Don't forget to subscribe! https://www.youtube.com/mlbFollow us elsewhere too:T...",
  //       url: "https://www.youtube.com/watch?v=21TmGchVXRA",
  //       urlToImage: "https://i.ytimg.com/vi/21TmGchVXRA/maxresdefault.jpg",
  //       publishedAt: "2022-10-13T05:36:53Z",
  //       content: null,
  //     },
  //     {
  //       source: {
  //         id: "fox-news",
  //         name: "Fox News",
  //       },
  //       author: "Brie Stimson",
  //       title:
  //         "Missing Georgia toddler Quinton Simon likely dead; police name mother as 'prime suspect' - Fox News",
  //       description:
  //         "Quinton Simon, who is 20 months old, went missing from his home on Oct. 5. Police said on Wednesday that he was believed to be dead and his mother is the main suspect.",
  //       url: "https://www.foxnews.com/us/missing-georgia-toddler-quinton-simon-likely-dead-police-name-mother-prime-suspect",
  //       urlToImage:
  //         "https://static.foxnews.com/foxnews.com/content/uploads/2022/10/QUINTON-SIMON-MISSING-SAVANNAH-GEORGIA.jpg",
  //       publishedAt: "2022-10-13T05:22:37Z",
  //       content:
  //         'Missing toddler Quinton Simon is believed to be dead and his mother is the prime suspect, Georgia authorities said Wednesday night. \r\n"We are saddened to report that CCPD and the FBI have notified Qu… [+2401 chars]',
  //     },
  //     {
  //       source: {
  //         id: null,
  //         name: "CNBC",
  //       },
  //       author: "Holly Ellyatt, Amanda Macias",
  //       title:
  //         "Zelenskyy asks for aid to rebuild Ukraine; power restored at occupied nuclear power plant - CNBC",
  //       description:
  //         "Ukraine is dealing with the aftermath of another day of missile attacks, and power and water supplies have not been restored in many places.",
  //       url: "https://www.cnbc.com/2022/10/12/russia-ukraine-live-updates.html",
  //       urlToImage:
  //         "https://image.cnbcfm.com/api/v1/image/107131449-1665234234849-gettyimages-1243812301-AFP_32KY6W2.jpeg?v=1665560457&w=1920&h=1080",
  //       publishedAt: "2022-10-13T04:58:00Z",
  //       content:
  //         "Despite being subject to further Russian missile strikes Tuesday, Ukraine's counteroffensive in the south continues, with its forces are consolidating gains and holding firm against Russian counterat… [+1329 chars]",
  //     },
  //     {
  //       source: {
  //         id: "cnn",
  //         name: "CNN",
  //       },
  //       author: "Amir Vera, Alta Spells, Dakin Andone",
  //       title:
  //         "Jurors will examine the AR-15 the Parkland shooter used as they deliberate possible death sentence - CNN",
  //       description:
  //         "During their second day of deliberations Thursday, the 12-person jury tasked with recommending a death sentence or life in prison for the Parkland, Florida, school shooter will examine the AR-15 he used in the 2018 massacre.",
  //       url: "https://www.cnn.com/2022/10/13/us/nikolas-cruz-jury-deliberation-thursday/index.html",
  //       urlToImage:
  //         "https://media.cnn.com/api/v1/images/stellar/prod/221012084552-nikolas-cruz.jpg?c=16x9&q=w_800,c_fill",
  //       publishedAt: "2022-10-13T04:37:00Z",
  //       content:
  //         "During their second day of deliberations Thursday, the 12-person jury tasked with recommending a death sentence or life in prison for the Parkland, Florida, school shooter will examine the AR-15 he u… [+4570 chars]",
  //     },
  //     {
  //       source: {
  //         id: "associated-press",
  //         name: "Associated Press",
  //       },
  //       author: "Lisa Mascaro, Mary Clare Jalonick",
  //       title:
  //         "Jan. 6 hearing promises 'surprising' details before election - The Associated Press",
  //       description:
  //         "WASHINGTON (AP) — The House Jan. 6 committee  is set to unveil “surprising” details including evidence from Donald Trump’s Secret Service about the 2021 attack on the U.S.",
  //       url: "https://apnews.com/article/capitol-siege-donald-trump-presidential-elections-election-2020-congress-43c97dd8db5ce460e051204f91aa6cd1",
  //       urlToImage:
  //         "https://storage.googleapis.com/afs-prod/media/b0b5b2eed6eb440aac772a4a5689769e/3000.jpeg",
  //       publishedAt: "2022-10-13T04:13:33Z",
  //       content:
  //         "WASHINGTON (AP) The House Jan. 6 committee is set to unveil surprising details including evidence from Donald Trumps Secret Service about the 2021 attack on the U.S. Capitol in what is likely to be i… [+5732 chars]",
  //     },
  //     {
  //       source: {
  //         id: null,
  //         name: "CBS Sports",
  //       },
  //       author: "R.J. Anderson",
  //       title:
  //         "Braves vs. Phillies takeaways: Atlanta ties NLDS behind bats of Olson, Riley, d'Arnaud - CBS Sports",
  //       description: "The Braves have now evened the series at 1-1",
  //       url: "https://www.cbssports.com/mlb/news/braves-vs-phillies-takeaways-atlanta-ties-nlds-behind-bats-of-olson-riley-darnaud/live/",
  //       urlToImage:
  //         "https://sportshub.cbsistatic.com/i/r/2022/10/13/370b062c-49aa-43aa-8944-2b8711323d02/thumbnail/1200x675/3b3fd7774a4ee9c02baa038e66f578e2/olsen-getty.png",
  //       publishedAt: "2022-10-13T03:09:43Z",
  //       content:
  //         "The Atlanta Braves broke through against Philadelphia Philles ace Zack Wheeler with a two-out rally in the sixth inning, and that plus the excellent pitching of Kyle Wright allowed them to take Game … [+3869 chars]",
  //     },
  //     {
  //       source: {
  //         id: null,
  //         name: "ScienceAlert",
  //       },
  //       author: "Michelle Starr",
  //       title:
  //         "JWST Captures Incredible Images of Dust Being Pushed by Light - ScienceAlert",
  //       description:
  //         "Two rare stars whipping around one another in a wide, wild tango have given astronomers a unique opportunity to study the gentle slap of light against their dusty skirts.",
  //       url: "https://www.sciencealert.com/jwst-captures-incredible-images-of-dust-being-pushed-by-light",
  //       urlToImage:
  //         "https://www.sciencealert.com/images/2022/10/wr-140-with-no-diffraction-spikes.jpg",
  //       publishedAt: "2022-10-13T03:06:38Z",
  //       content:
  //         "Two rare stars whipping around one another in a wide, wild tango have given astronomers a unique opportunity to study the gentle slap of light against their dusty skirts.\r\nThe binary object called WR… [+4885 chars]",
  //     },
  //     {
  //       source: {
  //         id: "cbs-news",
  //         name: "CBS News",
  //       },
  //       author: "Andres Triay, Robert Legare",
  //       title:
  //         "Mar-a-Lago employee tells investigators Donald Trump directed move of boxes with sensitive documents, source says - CBS News",
  //       description:
  //         "An individual with knowledge of the investigation tells CBS News there is video evidence of the boxes being handled.",
  //       url: "https://www.cbsnews.com/news/donald-trump-directed-move-of-documents-mar-a-lago-employee-told-investigators-source-says/",
  //       urlToImage:
  //         "https://assets3.cbsnewsstatic.com/hub/i/r/2022/10/13/7fd86eb7-865a-4358-95a9-aa49f2d094a7/thumbnail/1200x630g2/b15c5ac6629f6356f4d6cc13d254a719/gettyimages-1432117656.jpg",
  //       publishedAt: "2022-10-13T02:06:00Z",
  //       content:
  //         "Washington – An individual who worked at former President Donald Trump's Mar-a-Lago resort has told investigators that the former president directed the individual to move boxes of sensitive document… [+5662 chars]",
  //     },
  //     {
  //       source: {
  //         id: "google-news",
  //         name: "Google News",
  //       },
  //       author: null,
  //       title:
  //         '\'Black Adam\' First Reactions Call Dwayne Johnson Antihero Movie a "Brutal," "Adrenaline Fueled" "Game Changer - Collider',
  //       description: null,
  //       url: "https://news.google.com/__i/rss/rd/articles/CBMiQGh0dHBzOi8vY29sbGlkZXIuY29tL2JsYWNrLWFkYW0tcmVhY3Rpb25zLXJldmlld3MtaXMtaXQtZ29vZC1kYy_SAQA?oc=5",
  //       urlToImage: null,
  //       publishedAt: "2022-10-13T01:36:00Z",
  //       content: null,
  //     },
  //     {
  //       source: {
  //         id: "the-washington-post",
  //         name: "The Washington Post",
  //       },
  //       author: "Rachel Weiner, Carol D. Leonnig",
  //       title:
  //         "Oath Keepers on trial were in touch with Secret Service before Jan. 6 - The Washington Post",
  //       description:
  //         "At trial, witnesses testified that the Oath Keepers repeatedly discussed a violent takeover of the U.S. government.",
  //       url: "https://www.washingtonpost.com/dc-md-va/2022/10/12/oath-keepers-secret-service-trial/",
  //       urlToImage:
  //         "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/5J5OSUCGQUI63PQXRHF6NOGAUU.jpg&w=1440",
  //       publishedAt: "2022-10-13T01:26:00Z",
  //       content:
  //         "The founder of the Oath Keepers and other leaders of the self-styled militia movement were in contact with Secret Service officials multiple times in late 2020 and leading up to the attack on the U.S… [+5172 chars]",
  //     },
  //     {
  //       source: {
  //         id: null,
  //         name: "The Guardian",
  //       },
  //       author: "Guardian staff reporter",
  //       title:
  //         "Trump must sit for deposition in lawsuit brought by rape accuser E Jean Carroll - The Guardian US",
  //       description:
  //         "Judge denies request from Trump’s attorneys that planned testimony be delayed in defamation lawsuit",
  //       url: "https://www.theguardian.com/us-news/2022/oct/12/trump-deposition-lawsuit-rape-accusation-e-jean-carroll",
  //       urlToImage:
  //         "https://i.guim.co.uk/img/media/84dd62478490a5849e921347b38dc5d0c362ddd7/0_182_5472_3283/master/5472.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=e737b4495a0cadac6cb8a53beab41428",
  //       publishedAt: "2022-10-13T01:09:00Z",
  //       content:
  //         "Donald Trump will have to answer questions under oath next week in a defamation lawsuit lodged by a writer who says he raped her in the mid-1990s, a judge ruled Wednesday.\r\nUS district judge Lewis Ka… [+3383 chars]",
  //     },
  //   ],
  // };

  const updateData = async () => {
    setIsLoading(true);
    const url = `https://newsapi.org/v2/top-headlines?country=in&pageSize=${postPerPage}&page=${currentPage}&category=${props.category}&apiKey=b3e493cf037a447aac7fb76a6dc968ad`;
    const data1 = await fetch(url);
    const data2 = await data1.json();
    setData(() => ({title:"Top Headline", ...data2 }));

    setIsLoading(false);
    console.log("fetch data totalres" + data2.totalResults);
  };

  useEffect(() => {
    console.log("useffect");
    updateData();
  }, [props, currentPage]);

  // let lastIndexPost= currentPage * postPerPage;
  // let firstIndexPost= lastIndexPost-postPerPage;

  const gotoPage = (item) => {
    console.log("clickpaginate");
    if (item === "prev") setCurrentPage(currentPage - 1);
    else if (item === "next") setCurrentPage(currentPage + 1);
    else setCurrentPage(item);
  };

  const searchKey = (keywords) => {
    const ser = async () => {
      setIsLoading(true);
      const url = `https://newsapi.org/v2/top-headlines?q=${keywords}&apiKey=b3e493cf037a447aac7fb76a6dc968ad`;
      const data = await fetch(url);
      const data2 = await data.json();
      setData(() => ({title:`Search results for " ${keywords} "`, ...data2 }));
      setIsLoading(false);
    };
    ser();
  };

  return (
    <div className="conatainer-fluid" style={{ marginLeft: "280px" }}>
      <SearchBar searchKey={searchKey} />
      <News loading={isLoading} data={data} />
      <Pagination
        loading={isLoading}
        totalPost={data.totalResults}
        postPerPage={postPerPage}
        paginate={gotoPage}
      />
    </div>
  );
};

export default NewsContainer;
