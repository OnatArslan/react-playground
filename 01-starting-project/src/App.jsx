function OnTop() {
  return <h1>Hello world from first react app</h1>;
}

function Header() {
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        Fundamental React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function App() {
  return (
    <div>
      {/* This OnTop element also component */}
      <OnTop></OnTop>
      {/* This Header elements is Header component */}
      <Header></Header>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
