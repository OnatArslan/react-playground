export default function TabButton(props) {
  return (
    <li>
      {/* props.children refer to inner text of button element in App.jsx */}
      <button>{props.children}</button>
    </li>
  );
}
