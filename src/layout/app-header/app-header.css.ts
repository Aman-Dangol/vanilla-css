import { globalStyle, style } from "@vanilla-extract/css";
import {
  hiddenTill,
  marginX,
  responsiveStyling,
  showTill,
  size,
  spacing,
} from "../../css-helper";
import { flexItemCenterStyle, headerHeightVar } from "../../global.css";
import { paddingX } from "../../css-helper";
import { secondaryTextStyle } from "../../global.css";

export const appHeaderStyle = style([
  flexItemCenterStyle,
  {
    height: headerHeightVar,
  },
  paddingX(spacing["7"]),
  // Use space between in mobile, and tablet view because search bar wont be visible
  {
    justifyContent: "space-between",
    "@media": {
      ...responsiveStyling({
        lg: {
          justifyContent: "normal",
        },
      }),
    },
  },
]);

export const appHeaderLogoContainerStyle = style([
  flexItemCenterStyle,
  {
    gap: spacing["4"],
  },
]);

export const appHeaderLogo = style([
  {
    width: spacing["20"],
  },
]);

export const appHeaderLogoTitleStyle = style([
  {
    fontWeight: 600,
    fontSize: spacing["8"],
    verticalAlign: "top",
    lineHeight: 1,
  },
  hiddenTill("md", "inline-block"),
]);

export const appHeaderVerticalSeperatorStyle = style([
  {
    height: spacing["7"],
    width: 1,
    background: "#dedede",
  },
  hiddenTill("lg", "inline-block"),
]);

export const appHeaderLogoSectionStyle = style([
  flexItemCenterStyle,
  { gap: spacing[6] },
]);

export const appHeaderWorkspaceSwitchContainerStyle = style([
  flexItemCenterStyle,
  hiddenTill("lg", "flex"),
  {
    gap: spacing["2.5"],
  },
]);

export const appHeaderWorkspaceIconStyle = style({
  background: "#f9e7f5",
  padding: spacing["2.5"],
  borderRadius: 7,
});

export const appHeaderHamburger = style([size(spacing[6]), showTill("lg")]);

export const appHeaderSearchSectionContainerStyle = style([
  {
    flex: 1,
  },
  marginX(spacing[10]),
  hiddenTill("lg", "block"),
]);

export const appHeaderSearchButtonStyle = style([
  flexItemCenterStyle,
  secondaryTextStyle,
  {
    background: "#f7f8f9",
    textAlign: "start",
    paddingInline: spacing["2.5"],
    paddingBlock: spacing["1.5"],
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ececec",
    borderStyle: "solid",
    width: "100%",
    maxWidth: "700px",
    gap: spacing["2.5"],
    containerType: "inline-size",
    "@media": {
      ...responsiveStyling({
        xl: {
          maxWidth: "800px",
        },
      }),
    },
  },
]);

export const appHeaderSearchLeftStyle = style([
  flexItemCenterStyle,
  {
    flex: 1,
    gap: spacing["2.5"],
  },
]);

globalStyle(`${appHeaderSearchLeftStyle} > span `, {
  "@container": {
    "(max-width: 517px)": {
      maxWidth: "220px",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },
  },
});

export const appHeaderSearchRightStyle = style([
  flexItemCenterStyle,
  { gap: spacing["1.5"] },
]);

export const appHeaderProfileSection = style([
  flexItemCenterStyle,
  {
    gap: spacing["6"],
  },
  hiddenTill("lg", "flex"),
]);

export const appHeaderAvatarStyle = style({
  width: spacing[8],
  borderRadius: 7,
});

export const appHeadericonsStyle = style([
  size(spacing[6]),
  {
    color: "#7e8085",
  },
]);
