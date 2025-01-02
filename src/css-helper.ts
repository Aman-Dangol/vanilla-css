import { CSSProperties } from "@vanilla-extract/css";

export const paddingX = (padding: CSSProperties["padding"]): CSSProperties => ({
  paddingRight: padding,
  paddingLeft: padding,
});

export const paddingY = (padding: CSSProperties["padding"]): CSSProperties => ({
  paddingTop: padding,
  paddingBottom: padding,
});

type ResponsiveStyles = {
  sm?: CSSProperties;
  md?: CSSProperties;
  lg?: CSSProperties;
  xl?: CSSProperties;
  "2xl"?: CSSProperties;
};

export const responsiveStyling = (responsiveStyles: ResponsiveStyles) => {
  const result = {} as Record<string, CSSProperties>;

  if (responsiveStyles.sm) {
    result["screen and (min-width: 640px)"] = responsiveStyles.sm;
  }

  if (responsiveStyles.md) {
    result["screen and (min-width: 768px)"] = responsiveStyles.md;
  }
  if (responsiveStyles.lg) {
    result["screen and (min-width: 1024px)"] = responsiveStyles.lg;
  }
  if (responsiveStyles.xl) {
    result["screen and (min-width: 1280px)"] = responsiveStyles.xl;
  }
  if (responsiveStyles["2xl"]) {
    result["screen and (min-width: 1536px)"] = responsiveStyles["2xl"];
  }

  return result;
};

