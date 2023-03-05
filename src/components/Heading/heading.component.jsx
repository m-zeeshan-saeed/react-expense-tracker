import { HeadingComponent, HeadingWrapper } from "./heading.style";

export default function Heading({
  children,
  headVal,
  headSize,
  headFont,
  headColor,
  headJust = "center",
  headPadEnd = 0,
  headPadStart = 0,
  headPadLeft = 0,
  headPadRight = 0,
  headWeight = 500,
}) {
  return (
    <HeadingWrapper headJust={headJust}>
      <HeadingComponent
        as={headVal}
        headSize={headSize}
        headFont={headFont}
        headColor={headColor}
        headPadEnd={headPadEnd}
        headPadStart={headPadStart}
        headWeight={headWeight}
        headPadLeft={headPadLeft}
        headPadRight={headPadRight}
      >
        {children}
      </HeadingComponent>
    </HeadingWrapper>
  );
}
