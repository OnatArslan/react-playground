const reactDescriptions = [`Fundamental`, `Crucial`, `Core`];

function genRandom(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDescriptions[genRandom(3)]} React concepts you will need for
        almost any app you are going to build!
      </p>
    </header>
  );
}

function App() {
  return (
    <div>
      {/* This Header elements is Header component */}
      <Header></Header>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
