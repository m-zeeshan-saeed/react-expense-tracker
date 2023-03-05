import { InputTextWrapper } from "./input-text.style";

export default function InputText({ type, placeholder, onChange }) {
  return (
    <InputTextWrapper>
      <input
        width="100%"
        type={type}
        placeholder={placeholder}
        required
        onChange={onChange}
        onSubmit={(event) => (event.target.value = null)}
      />
    </InputTextWrapper>
  );
}
