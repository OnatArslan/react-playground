export default function TabButton({ children, onSelect }) {
  return (
    <li>
      {/* props.children refer to inner text of button element in App.jsx */}
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}
