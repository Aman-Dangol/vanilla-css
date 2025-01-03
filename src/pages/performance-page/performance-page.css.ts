import { size } from "./../../css-helper";

import { style } from "@vanilla-extract/css";
import { flexItemCenterStyle } from "../../global.css";
import { spacing } from "../../css-helper";

export const performanceheaderStyle = style([
  flexItemCenterStyle,
  {
    gap: spacing["2.5"],
    color: "#9e9fab",
    fontSize: spacing["3"],
    fontWeight: "400",
  },
]);

export const performanceheaderIconStyle = style([size(spacing[6])]);
export const performanceTickIconStyle = style([
  size(spacing[6]),
  {
    color: "#018205",
  },
]);

export const performanceContainerStyle = style({
  padding: spacing[7],
});

export const performanceTickContainerStyle = style({
  background: "",
});
