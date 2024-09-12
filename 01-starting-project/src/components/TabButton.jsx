export default function TabButton(props) {
  function handleClick() {
    console.log(`Hello world`);
  }
  return (
    <li>
      {/* props.children refer to inner text of button element in App.jsx */}
      <button onClick={handleClick}>{props.children}</button>
    </li>
  );
}
