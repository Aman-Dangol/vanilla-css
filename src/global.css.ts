import { createVar, globalStyle, style } from "@vanilla-extract/css";
import { spacing } from "./css-helper";
export const headerHeightVar = createVar();
export const secondaryText = createVar();

globalStyle(":root", {
  fontSize: "14px",
  vars: {
    [headerHeightVar]: spacing["20"],
    [secondaryText]: "#868796",
  },
});

globalStyle("body", {
  fontFamily: '"Inter", serif',
  fontOpticalSizing: "auto",
  fontWeight: 400,
  fontStyle: "normal",
  padding: 0,
});

export const flexItemCenterStyle = style({
  display: "flex",
  alignItems: "center",
});

export const secondaryTextStyle = style({
  color: secondaryText,
});

export const CodeStyle = style([
  {
    padding: spacing["2"],
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#ececec",
    borderStyle: "solid",
    borderRadius: 7,
    color: "#292929",
  },
]);
