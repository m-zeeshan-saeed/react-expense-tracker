import { CardBlockComponent, CardBlockWrapper } from "./card-block.style";

export default function CardBlock({
  children,
  cardJust = "center",
  cardPadEnd = 0,
  cardPadStart = 0,
  headBg = "white",
  cardMar = 0,
  cardFlexDir,
}) {
  return (
    <CardBlockWrapper cardJust={cardJust}>
      <CardBlockComponent
        headBg={headBg}
        cardPadEnd={cardPadEnd}
        cardPadStart={cardPadStart}
        cardMar={cardMar}
        cardFlexDir={cardFlexDir}
      >
        {children}
      </CardBlockComponent>
    </CardBlockWrapper>
  );
}
