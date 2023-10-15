import logo from './assets/cherry.png';
import tgaaStatsPreview from './assets/tgaa-stats-preview.webp';
import './App.css';
import { FiExternalLink } from 'react-icons/fi';

const portfolioItems = [
  {
    title: 'TGAA stats',
    description:
      'A one-page website to show the percentage of players who got each achievement on The Great Ace Attorney Chronicles.',
    url: 'tgaa-stats',
    previewImage: tgaaStatsPreview,
  },
  {
    title: 'TGAA stats',
    description:
      'A one-page website to show the percentage of players who got each achievement on The Great Ace Attorney Chronicles.',
    url: 'tgaa-stats',
    previewImage: tgaaStatsPreview,
  },
  {
    title: 'TGAA stats',
    description:
      'A one-page website to show the percentage of players who got each achievement on The Great Ace Attorney Chronicles.',
    url: 'tgaa-stats',
    previewImage: tgaaStatsPreview,
  },
  {
    title: 'TGAA stats',
    description:
      'A one-page website to show the percentage of players who got each achievement on The Great Ace Attorney Chronicles.',
    url: 'tgaa-stats',
    previewImage: tgaaStatsPreview,
  },
  {
    title: 'TGAA stats',
    description:
      'A one-page website to show the percentage of players who got each achievement on The Great Ace Attorney Chronicles.',
    url: 'tgaa-stats',
    previewImage: tgaaStatsPreview,
  },
  {
    title: 'TGAA stats',
    description:
      'A one-page website to show the percentage of players who got each achievement on The Great Ace Attorney Chronicles.',
    url: 'tgaa-stats',
    previewImage: tgaaStatsPreview,
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="250" />
        <h1>cherrycodes.net</h1>
      </header>
      <About />
      <Portfolio />
    </div>
  );
}

const About = () => (
  <div id="about">
    <p>
      Hi! I am a software engineer based in the south west of the UK. I started my career as a web designer, before
      moving on to front end development, and am now dipping my toes into full stack and app development.
    </p>
    <p>
      In my spare time I like to combine my coding skills with some of the geeky things I'm into. This little corner of
      the internet is where I showcase it all.
    </p>
  </div>
);

const Portfolio = () => {
  return (
    <div id="portfolio">
      {portfolioItems.map((item, index) => (
        <PortfolioCard item={item} key={index} />
      ))}
    </div>
  );
};

const PortfolioCard = ({ item, key }) => {
  const url = `https://${item.url}.cherrycodes.net`;
  const shortUrl = `${item.url}.cherrycodes.net`;

  return (
    <a className="portfolio-card" href={url} target="_blank" rel="noreferrer" key={key}>
      <div className="top-bar">
        <h2>{item.title}</h2>
        <span className="fake-button"></span>
        <FiExternalLink />
      </div>
      <div className="portfolio-card-content">
        <img src={item.previewImage} alt={item.title} />
        <div>{item.description}</div>
        {/* <div>
        <h3>Techy details</h3>
        {item.tech}
      </div> */}
        <a href={url} target="_blank" rel="noreferrer">
          {shortUrl}
        </a>
      </div>
    </a>
  );
};

export default App;
