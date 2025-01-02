import { createVar, globalStyle } from "@vanilla-extract/css";
export const headerHeightVar = createVar();
export const secondaryText = createVar();

globalStyle(":root", {
  vars: {
    [headerHeightVar]: "90px",
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
