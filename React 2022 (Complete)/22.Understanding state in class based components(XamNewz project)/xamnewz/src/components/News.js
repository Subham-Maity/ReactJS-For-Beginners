import React, { Component } from 'react'
import NewsItem from "./NewsItem";

export class News extends Component {
  articles =  [
      {
        "source": {
          "id": "reuters",
          "name": "Reuters"
        },
        "author": null,
        "title": "Elon Musk says Twitter legal team told him he violated an NDA - Reuters",
        "description": "Elon Musk on Saturday tweeted that Twitter Inc's <a href=\"https://www.reuters.com/companies/TWTR.N\" target=\"_blank\">(TWTR.N)</a> legal team accused him of violating a nondisclosure agreement by revealing that the sample size for the social media platform's ch…",
        "url": "https://www.reuters.com/markets/deals/elon-musk-says-twitter-legal-team-told-him-he-violated-an-nda-2022-05-15/",
        "urlToImage": "https://www.reuters.com/resizer/uJ5mTUU8wwRYogVmsH0lQkh7tyE=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/UUOP4DBZSFMHBGNPEHCUYYEOCM.jpg",
        "publishedAt": "2022-05-15T07:48:00Z",
        "content": "May 14 (Reuters) - Elon Musk on Saturday tweeted that Twitter Inc's (TWTR.N) legal team accused him of violating a nondisclosure agreement by revealing that the sample size for the social media platf… [+1309 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "CNBC"
        },
        "author": "Dan Murphy, Natasha Turak",
        "title": "Oil giant Aramco reports record first quarter as oil prices soar - CNBC",
        "description": "Saudi Arabia's Aramco reported a more-than 80% jump in profit, topping analyst expectations and setting a new record for the company.",
        "url": "https://www.cnbc.com/2022/05/15/aramco-worlds-largest-company-reports-record-first-quarter-as-oil-prices-soar.html",
        "urlToImage": "https://image.cnbcfm.com/api/v1/image/106920590-1627925507218-aramco2.jpg?v=1627925528&w=1920&h=1080",
        "publishedAt": "2022-05-15T07:16:42Z",
        "content": "Oil giant Aramco reported a more-than 80% jump in net profit Sunday, topping analyst expectations and setting a new quarterly earnings record since its IPO. \r\nThe Saudi Arabian behemoth said net inco… [+2113 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "CNET"
        },
        "author": "Eric Mack",
        "title": "Scientists Grow Plants in Moon Soil for the First Time - CNET",
        "description": "Are we looking at future lunar lunches?",
        "url": "https://www.cnet.com/science/space/scientists-grow-plants-in-moon-soil-for-the-first-time/",
        "urlToImage": "https://www.cnet.com/a/img/resize/94eb7f680ae0c203e78e47273ec1d7e51ce0f95e/2022/05/12/ad23fefc-fd9e-4497-82d9-4d763fc8a25e/plants-in-soil-from-the-moon3.jpg?auto=webp&fit=crop&height=630&width=1200",
        "publishedAt": "2022-05-15T06:31:00Z",
        "content": "When NASA sends Artemis astronauts back to the surface of the moon in coming years, they should be able to grow their own salad. That's just one ramification of a historic experiment in which scienti… [+2264 chars]"
      },
      {
        "source": {
          "id": "reuters",
          "name": "Reuters"
        },
        "author": null,
        "title": "Thousands in U.S. march under 'Ban Off Our Bodies' banner for abortion rights - Reuters",
        "description": "Thousands of abortion rights supporters rallied across the United States on Saturday, angered by the prospect that the Supreme Court may soon overturn the landmark Roe v. Wade decision that legalized abortion nationwide a half century ago.",
        "url": "https://www.reuters.com/world/us/us-abortion-rights-activists-start-summer-rage-with-saturday-protests-2022-05-14/",
        "urlToImage": "https://www.reuters.com/resizer/Q4HWJnbQOs62dFdJhoOl21bWX_4=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/LSE2TULBR5MYRI7UXPA5QI6MXA.jpg",
        "publishedAt": "2022-05-15T05:59:00Z",
        "content": "WASHINGTON, May 14 (Reuters) - Thousands of abortion rights supporters rallied across the United States on Saturday, angered by the prospect that the Supreme Court may soon overturn the landmark Roe … [+5611 chars]"
      },
      {
        "source": {
          "id": "cnn",
          "name": "CNN"
        },
        "author": "Shimon Prokupecz, Artemis Moshtaghian and Christina Maxouris, CNN",
        "title": "What we know about Buffalo supermarket shooting suspect Payton Gendron - CNN",
        "description": "The 18-year-old man who allegedly shot and killed 10 people at a Buffalo supermarket Saturday afternoon was motivated by hate, authorities said.",
        "url": "https://www.cnn.com/2022/05/15/us/payton-gendron-buffalo-shooting-suspect-what-we-know/index.html",
        "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220514220516-02-payton-gendron-buffalo-051422-super-tease.jpg",
        "publishedAt": "2022-05-15T05:38:00Z",
        "content": "(CNN)The 18-year-old man who allegedly shot and killed 10 people at a Buffalo supermarket Saturday afternoon was motivated by hate, authorities said.\r\nThe Tops Friendly Market where the shooting took… [+4450 chars]"
      },
      {
        "source": {
          "id": "cnn",
          "name": "CNN"
        },
        "author": "Nectar Gan, Gawon Bae and Helen Regan, CNN",
        "title": "What we know (and don't know) about North Korea's Covid outbreak - CNN",
        "description": "North Korea's first-reported Covid-19 outbreak is the \"greatest turmoil\" to befall the country since its founding more than 70 years ago, according to its leader Kim Jong Un, as the isolated and impoverished nation scrambles to curb the spread of a highly tra…",
        "url": "https://www.cnn.com/2022/05/14/asia/north-korea-covid-outbreak-explainer-intl-hnk/index.html",
        "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220513201612-kim-jong-un-0514-super-tease.jpg",
        "publishedAt": "2022-05-15T05:29:00Z",
        "content": "(CNN)North Korea's first-reported Covid-19 outbreak is the \"greatest turmoil\" to befall the country since its founding more than 70 years ago, according to its leader Kim Jong Un, as the isolated and… [+8745 chars]"
      },
      {
        "source": {
          "id": "associated-press",
          "name": "Associated Press"
        },
        "author": "Steve Peoples",
        "title": "'Reprehensible': Oz condemns GOP opponent's tweet on Islam - The Associated Press - en Español",
        "description": "CARLISLE, Pa. (AP) — Republican Senate hopeful Mehmet Oz  is stepping up his criticism of far-right candidates in Pennsylvania who are gaining traction ahead of Tuesday's primary election.",
        "url": "https://apnews.com/article/abortion-2022-midterm-elections-pennsylvania-religion-primary-7731ebe00e378a59294396cc6eb1b7a3",
        "urlToImage": "https://storage.googleapis.com/afs-prod/media/c422a1c98c464e3e9fa360092d17efe6/3000.jpeg",
        "publishedAt": "2022-05-15T05:22:08Z",
        "content": "CARLISLE, Pa. (AP) Republican Senate hopeful Mehmet Oz is stepping up his criticism of far-right candidates in Pennsylvania who are gaining traction ahead of Tuesdays primary election.\r\nAfter spendin… [+3155 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "YouTube"
        },
        "author": null,
        "title": "Jan Blachowicz Octagon Interview | UFC Vegas 54 - UFC - Ultimate Fighting Championship",
        "description": "Former UFC light heavyweight champion Jan Blachowicz found success in the Octagon Saturday at UFC Vegas 54, earning a third-round knockout victory over Aleks...",
        "url": "https://www.youtube.com/watch?v=weMzogps65k",
        "urlToImage": "https://i.ytimg.com/vi/weMzogps65k/hqdefault.jpg",
        "publishedAt": "2022-05-15T05:12:38Z",
        "content": null
      },
      {
        "source": {
          "id": null,
          "name": "CBS Sports"
        },
        "author": "Brent Brookhouse",
        "title": "Jermell Charlo vs. Brian Castano 2 fight results, highlights: Charlo becomes undisputed champ with vicious KO - CBS Sports",
        "description": "Charlo and Castano delivered the goods as the two brawled for nine rounds before the unified champ added a fourth title to his collection",
        "url": "https://www.cbssports.com/boxing/news/jermell-charlo-vs-brian-castano-2-fight-results-highlights-charlo-becomes-undisputed-champ-with-vicious-ko/live/",
        "urlToImage": "https://sportshub.cbsistatic.com/i/r/2022/05/15/137ffdf9-450d-4aba-8979-61292aa92fa1/thumbnail/1200x675/c5e6bdfa3797f81169691416521cac2e/jermell-charlo-castano-action-2.png",
        "publishedAt": "2022-05-15T04:29:19Z",
        "content": "The first fight between Jermell Charlo and Brian Castano was a thriller with an inconclusive result as the four-belt junior middleweight unification ended in a split draw. The two rematched on Saturd… [+3619 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Daily Beast"
        },
        "author": "Matt Wilstein",
        "title": "'Full Nightmare': SNL Takes on Johnny Depp-Amber Heard Trial - The Daily Beast",
        "description": "“Saturday Night Live” opened its show this week with “live” coverage of the celebrity trial that is consuming America.",
        "url": "https://www.thedailybeast.com/snl-takes-on-full-nightmare-johnny-depps-trial-against-amber-heard",
        "urlToImage": "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_943,w_1678,x_434,y_128/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1652587309/SNL_hg96hk",
        "publishedAt": "2022-05-15T04:18:21Z",
        "content": "Saturday Night Live took a break from politics this week to instead bring viewers live coverage of the Johnny Depp vs. Amber Heard cuckoo trial. \r\nI know its not the most pertinent story of the momen… [+1321 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "lakingsinsider.com"
        },
        "author": null,
        "title": "Game Thread – Kings @ Oilers, Round 1, Game 7 - LA Kings Insider",
        "description": "Los Angeles Kings 0, Edmonton Oilers 2 FINAL Game Preview WATCH: Bally Sports West LISTEN: LA Kings Audio Network SOG: LAK – 27 EDM – 42 PP: LAK – 0/0 EDM – 0/1 First Period No Scoring Second Period 1. EDM – Cody Ceci (1) – (Connor McDavid) – 13:15 Third Peri…",
        "url": "https://lakingsinsider.com/2022/05/14/game-thread-kings-oilers-round-1-game-7/",
        "urlToImage": "https://lakingsinsider.com/wp-content/uploads/2022/05/Arthur-Kaliyev-EDM.jpg",
        "publishedAt": "2022-05-15T04:10:54Z",
        "content": "Los Angeles Kings 0, Edmonton Oilers 2FINALGame PreviewWATCH: Bally Sports WestLISTEN: LA Kings Audio NetworkSOG: LAK 27 EDM 42PP: LAK 0/0 EDM 0/1\r\nFirst PeriodNo Scoring\r\nSecond Period1. EDM Cody Ce… [+537 chars]"
      },
      {
        "source": {
          "id": "the-wall-street-journal",
          "name": "The Wall Street Journal"
        },
        "author": "Yaroslav Trofimov and Mauro Orru",
        "title": "Ukraine Launches Counteroffensive to Disrupt Russian Supply Lines - The Wall Street Journal",
        "description": "Ukrainian forces continued clearing villages north of Kharkiv, Russian President Vladimir Putin warned Finland’s leader that joining NATO would risk damaging ties with Moscow, and GOP senators visited Kyiv.",
        "url": "https://www.wsj.com/articles/ukraine-launches-counteroffensive-to-disrupt-russian-supply-lines-11652531731",
        "urlToImage": "https://images.wsj.net/im-544546/social",
        "publishedAt": "2022-05-15T04:01:00Z",
        "content": "KYIV, UkraineUkraine began a counteroffensive toward the eastern city of Izyum aimed at disrupting Russian supply lines into the Donbas region, officials said, as Ukrainian forces continued clearing … [+581 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Hollywood Life"
        },
        "author": "Cassie Gill",
        "title": "Selena Gomez Declares She’s ‘Single’ & ‘Manifesting Love’: ‘Heard SNL Is A Place To Find Romance’ - HollywoodLife",
        "description": "Selena Gomez made her 'Saturday Night Live' debut on May 14, hosting during its 47th season. During her opening monologue, she revealed she's single and 'looking for my soulmate'!",
        "url": "https://hollywoodlife.com/2022/05/14/snl-selena-gomez-single-joke-opening-monologue-video/",
        "urlToImage": "https://hollywoodlife.com/wp-content/uploads/2022/05/selena-gomez-snl-open-nbc-ftr.jpg",
        "publishedAt": "2022-05-15T03:53:00Z",
        "content": "View galleryImage Credit: NBC\r\nSelena Gomez, 29, took to the Saturday Night Live stage for the first time on May 14. The Same Old Love singer declared that she is, in fact, single in her opening mono… [+2984 chars]"
      },
      {
        "source": {
          "id": "cnn",
          "name": "CNN"
        },
        "author": "Ivana Kottasová and Rob Picheta, CNN",
        "title": "Ukraine wins Eurovision Song Contest in wave of goodwill following invasion by Russia - CNN",
        "description": "Ukraine's folk-rap group Kalush Orchestra captured the imagination of fans across the continent.",
        "url": "https://www.cnn.com/2022/05/14/entertainment/ukraine-wins-eurovision-song-contest-2022-after-russian-invasion-intl/index.html",
        "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220512123841-02-eurovision-2022-preview-super-tease.jpg",
        "publishedAt": "2022-05-15T00:41:00Z",
        "content": "Kyiv, Ukraine (CNN)Ukraine's folk-rap group Kalush Orchestra has won this year's Eurovision Song Contest, surfing a wave of goodwill from European nations to clinch the country's third win at the gli… [+4082 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "New York Post"
        },
        "author": "Eileen AJ Connelly",
        "title": "Female jail guard suspected of helping teens escape Louisiana detention center - New York Post ",
        "description": "Video surveillance captured a security guard driving three teens who were serving time for felonies from the Ware Youth Detention Center in Coushatta, Louisiana, Saturday.",
        "url": "https://nypost.com/2022/05/14/guard-victoria-tune-suspected-of-helping-teens-escape-detention-center/",
        "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2022/05/inmates-escaped-main.jpg?quality=75&strip=all&w=1024",
        "publishedAt": "2022-05-14T23:43:00Z",
        "content": "A Louisiana security officer is suspected of helping three teen inmates escape from a youth detention center Saturday.\r\nThe escape comes two weeks after a jail boss in neighboring Alabama helped a co… [+2029 chars]"
      },
      {
        "source": {
          "id": "the-washington-post",
          "name": "The Washington Post"
        },
        "author": "David L. Stern, William Branigin, Timothy Bella",
        "title": "Mitch McConnell leads Senate GOP delegation in surprise visit Ukraine, meets President Zelensky - The Washington Post",
        "description": "Zelensky expressed hope that the Senate would quickly approve a nearly $40 billion package of additional funding for Ukraine after Sen. Rand Paul (R-Ky.), who was not on the trip, blocked the vote until next week.",
        "url": "https://www.washingtonpost.com/politics/2022/05/14/ukraine-mcconnell-gop-visit-zelensky/",
        "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/VWWHKRWTRQI6ZCDL353BQPJDH4.jpg&w=1440",
        "publishedAt": "2022-05-14T23:39:24Z",
        "content": "Placeholder while article actions load\r\nUkrainian President Volodymyr Zelensky met Saturday with a U.S. Senate delegation led by Minority Leader Mitch McConnell (R-Ky.) in Kyiv, calling the visit a p… [+5279 chars]"
      },
      {
        "source": {
          "id": "bloomberg",
          "name": "Bloomberg"
        },
        "author": null,
        "title": "Whereabouts of Terra's Bitcoin Reserve a Mystery After Transfers - Bloomberg",
        "description": null,
        "url": "https://www.bloomberg.com/tosv2.html?vid=&uuid=8eb129f1-d3e9-11ec-90e0-576e6953466d&url=L25ld3MvYXJ0aWNsZXMvMjAyMi0wNS0xNC93aGVyZWFib3V0cy1vZi10ZXJyYS1zLWJpdGNvaW4tcmVzZXJ2ZS1hLW15c3RlcnktYWZ0ZXItdHJhbnNmZXJz",
        "urlToImage": null,
        "publishedAt": "2022-05-14T23:31:23Z",
        "content": "To continue, please click the box below to let us know you're not a robot."
      },
      {
        "source": {
          "id": null,
          "name": "New York Times"
        },
        "author": "Adam Liptak",
        "title": "Justice Thomas Says Leaked Opinion Destroyed Trust at Supreme Court - The New York Times",
        "description": "In remarks at a conference in Dallas, he also denounced the recent protests at justices’ homes and said conservatives would not adopt such tactics.",
        "url": "https://www.nytimes.com/2022/05/14/us/politics/supreme-court-clarence-thomas.html",
        "urlToImage": "https://static01.nyt.com/images/2022/05/13/us/justice-thomas--may-13/justice-thomas--may-13-facebookJumbo-v3.jpg",
        "publishedAt": "2022-05-14T22:46:07Z",
        "content": "Justice Thomas said the left had adopted tactics that conservatives would not employ.\r\nYou would never visit Supreme Court justices houses when things didnt go our way, he said. We didnt throw temper… [+1398 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "NBC 6 South Florida"
        },
        "author": "NBC 6",
        "title": "1 Dead, 5 Hurt After Small Plane Crashes on Miami Bridge, Hits SUV and Catches Fire - NBC 6 South Florida",
        "description": "One person was killed and five others were injured when a small plane crash landed on a bridge in Miami Saturday afternoon, hitting an SUV and bursting into…",
        "url": "https://www.nbcmiami.com/news/local/small-plane-crashes-haulover-inlet-bridge-miami/2760742/",
        "urlToImage": "https://media.nbcmiami.com/2022/05/plane.png?fit=1200%2C675&quality=85&strip=all",
        "publishedAt": "2022-05-14T21:30:58Z",
        "content": "One person was killed and five others were injured when a small plane crash-landed on a bridge in Miami Saturday afternoon, hitting an SUV and bursting into flames.\r\nThe plane went down shortly befor… [+3463 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Deadline"
        },
        "author": "Matt Grobar",
        "title": "Britney Spears Says She’s Suffered Miscarriage: “We Lost Our Miracle Baby” - Deadline",
        "description": "Britney Spears has lost her first child with fiancé Sam Asghari. The pop star broke the news of her miscarriage in a statement posted to her Instagram feed on Sunday. “It is with our deepest sadness we have to announce that we lost our miracle baby early in t…",
        "url": "https://deadline.com/2022/05/britney-spears-says-shes-suffered-miscarriage-we-lost-our-miracle-baby-1235023937/",
        "urlToImage": "https://deadline.com/wp-content/uploads/2022/05/AP22102663036163-e1652562716681.jpg?w=1024",
        "publishedAt": "2022-05-14T21:19:00Z",
        "content": "Britney Spears has lost her first child with fiancé Sam Asghari.\r\nThe pop star broke the news of her miscarriage in a statement posted to her Instagram feed on Sunday. “It is with our deepest sadness… [+1002 chars]"
      }
    ]
  constructor() {
    super();
    console.log('Hello I am a constructor from News component');

    this.state = {
      articles: this.articles,
      loading: false,


    }
  }
  render() {
      let {title, description, imageUrl} = this.props;
    return (
      <div className="container my-3">
          <h2>XamNewz - Top Headlines</h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItem title="myTitle" description="mydesc" imageUrl = "https://www.reuters.com/resizer/uJ5mTUU8wwRYogVmsH0lQkh7tyE=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/UUOP4DBZSFMHBGNPEHCUYYEOCM.jpg" />
          </div>
          <div className="col-md-4">
            <NewsItem title="myTitle" description="mydesc"/>
          </div>
          <div className="col-md-4">
            <NewsItem title="myTitle" description="mydesc"/>
            </div>
          </div>

      </div>

    )
  }
}

export default News