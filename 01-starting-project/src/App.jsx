import reactImg from './assets/react-core-concepts.png';
import componentImg from './assets/components.png';

import { CORE_CONCEPTS } from './data';

const reactDescriptions = [`Fundamental`, `Crucial`, `Core`];

function genRandom(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[genRandom(3)];
  return (
    <header>
      {/* Import image and use it on src attributes */}
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function CoreConcept({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      {/* This Header elements is Header component */}
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <CoreConcept {...CORE_CONCEPTS[0]} />
          <CoreConcept {...CORE_CONCEPTS[1]} />
          <CoreConcept {...CORE_CONCEPTS[2]} />
          <CoreConcept {...CORE_CONCEPTS[3]} />
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
