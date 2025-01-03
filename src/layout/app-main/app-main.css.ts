import { globalStyle, style } from "@vanilla-extract/css";
import { spacing } from "../../css-helper";

export const appMainContainerStyle = style({
  padding: spacing["2.5"],
});

globalStyle(`${appMainContainerStyle} > div`, {
  backgroundColor: "#f6f7f8",
  height: 200,
  borderRadius: 8,
  borderWidth: 1,
  borderColor: "#ececec",
  borderStyle: "solid",
});
