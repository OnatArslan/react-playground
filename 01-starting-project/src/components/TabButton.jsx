export default function TabButton({ label }) {
  return (
    <li>
      {/* props.children refer to inner text of button element in App.jsx */}
      <button>{label}</button>
    </li>
  );
}
