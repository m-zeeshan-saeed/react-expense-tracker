import React from "react";
import { SubContainerComponent, SubContainerWrapper } from "./sub-container.style";

export default function SubContainer({ children }) {
  return (
    <SubContainerWrapper>
      <SubContainerComponent>{children}</SubContainerComponent>
    </SubContainerWrapper>
  );
}
