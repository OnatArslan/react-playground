export default function TabButton(props) {
  function handleClick() {}
  return (
    <li>
      {/* props.children refer to inner text of button element in App.jsx */}
      <button onClick>{props.children}</button>
    </li>
  );
}
