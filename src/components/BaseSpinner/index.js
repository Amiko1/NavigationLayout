import "./index.css";

export default function BaseSpinner() {
  return (
    <div>
      <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
