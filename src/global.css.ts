import { createVar, globalStyle, style } from "@vanilla-extract/css";
import { spacing } from "./css-helper";
export const headerHeightVar = createVar();
export const secondaryText = createVar();

globalStyle(":root", {
  fontSize: "0.875em",
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
