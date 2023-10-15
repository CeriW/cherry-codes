import logo from './assets/cherry.png';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="100" />
        <h1>cherrycodes.net</h1>
      </header>
      <main>
        <About />
      </main>
    </div>
  );
}

const About = () => (
  <div>
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

export default App;
