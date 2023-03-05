import { CardComponent, CardWrapper } from "./card.style";

export default function Card({
  children,
  cardJust = "center",
  cardPadEnd = 0,
  cardPadStart = 0,
  headBg = "white",
  cardBorder = "none",
}) {
  return (
    <CardWrapper cardJust={cardJust}>
      <CardComponent
        headBg={headBg}
        cardPadEnd={cardPadEnd}
        cardPadStart={cardPadStart}
        cardBorder={cardBorder}
      >
        {children}
      </CardComponent>
    </CardWrapper>
  );
}
