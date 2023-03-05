import {
  CustomButtonComponent,
  CustomButtonWrapper,
} from "./custom-button.style";

export default function CustomButton({ value, color, type }) {
  return (
    <CustomButtonWrapper>
      <CustomButtonComponent color={color}>
        <button type={type}>{value}</button>
      </CustomButtonComponent>
    </CustomButtonWrapper>
  );
}
