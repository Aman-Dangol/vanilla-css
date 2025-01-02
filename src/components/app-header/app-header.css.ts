import { style } from "@vanilla-extract/css";
import { responsiveStyling } from "../../css-helper";
import { headerHeightVar, secondaryText } from "../../global.css";
import { paddingX } from "./../../css-helper";

export const appHeaderStyle = style({
  height: headerHeightVar,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  ...paddingX(28),
});

export const appHeaderSearchbar = style({
  display: "none",
  background: "#f7f8f9",
  borderColor: "#ececec",
  borderWidth: 1,
  borderStyle: "solid",
  maxWidth: 350,
  width: "100%",
  textAlign: "left",
  padding: 10,
  alignItems: "center",
  gap: 10,
  borderRadius: 12,
  color: secondaryText,
  "@media": {
    ...responsiveStyling({
      sm: {
        display: "flex",
      },
      md: {
        maxWidth: 450,
      },
      lg: {
        maxWidth: 600,
      },
      xl: {
        maxWidth: 900,
      },
    }),
  },
});

export const appHeaderLogoContainer = style({
  display: "flex",
  alignItems: "center",
  gap: 16,
});

export const appHeaderTitle = style({
  fontWeight: 600,
  fontSize: 32,
  display: "none",
  "@media": {
    ...responsiveStyling({
      md: {
        display: "inline-block",
      },
    }),
  },
});

export const appHeaderHamburger = style({
  width: 24,
  "@media": {
    ...responsiveStyling({
      lg: {
        display: "none",
      },
    }),
  },
});

export const appHeaderWorkspaceSwitch = style({
  display: "flex",
  gap: 6,
  alignItems: "center",
});

export const appHeaderWorkspaceIconContainer = style({
  background: "#f9e7f5",
  padding: 8,
  borderRadius: 7,
});

export const appHeaderWorkspaceIcon = style({
  selectors: {
    [`${appHeaderWorkspaceIconContainer} > &`]: {
      display: "block",
    },
  },
});

export const appHeaderWorkspaceSwitchIcon = style({
  color: secondaryText,
});
