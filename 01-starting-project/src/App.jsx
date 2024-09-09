import Header from './components/Header';
import CoreConcept from './components/CoreConcept';

import { CORE_CONCEPTS } from './data';
import componentImg from './assets/components.png';

function App() {
  return (
    <div>
      {/* This Header elements is Header component */}
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
