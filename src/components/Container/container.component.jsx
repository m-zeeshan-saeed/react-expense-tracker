import React from "react";
import { ContainerComponent, ContainerWrapper } from "./container.style";

export default function Container({ children }) {
  return (
    <ContainerWrapper>
      <ContainerComponent>{children}</ContainerComponent>
    </ContainerWrapper>
  );
}
