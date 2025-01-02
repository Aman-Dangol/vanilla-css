import { ComplexStyleRule, CSSProperties } from "@vanilla-extract/css";

export const paddingX = (padding: CSSProperties["padding"]): CSSProperties => ({
  paddingRight: padding,
  paddingLeft: padding,
});

export const paddingY = (padding: CSSProperties["padding"]): CSSProperties => ({
  paddingTop: padding,
  paddingBottom: padding,
});

export const marginX = (margin: CSSProperties["margin"]): CSSProperties => ({
  marginRight: margin,
  marginLeft: margin,
});

export const marginY = (margin: CSSProperties["margin"]): CSSProperties => ({
  marginTop: margin,
  marginBottom: margin,
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

export const hiddenTill = (
  hiddenTillSize: keyof ResponsiveStyles = "sm",
  displayValue: CSSProperties["display"] = "block"
) =>
  ({
    display: "none",
    "@media": {
      ...responsiveStyling({
        [hiddenTillSize]: {
          display: displayValue,
        },
      }),
    },
  } satisfies ComplexStyleRule);

export const showTill = (hiddenTillSize: keyof ResponsiveStyles = "sm") =>
  ({
    "@media": {
      ...responsiveStyling({
        [hiddenTillSize]: {
          display: "none",
        },
      }),
    },
  } satisfies ComplexStyleRule);

export const size = (size: CSSProperties["width"]) =>
  ({
    width: size,
    height: size,
  } satisfies CSSProperties);

export const spacing = {
  px: "1px",
  0: "0px",
  0.5: "0.125rem",
  1: "0.25rem",
  1.5: "0.375rem",
  2: "0.5rem",
  2.5: "0.625rem",
  3: "0.75rem",
  3.5: "0.875rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  11: "2.75rem",
  12: "3rem",
  14: "3.5rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  36: "9rem",
  40: "10rem",
  44: "11rem",
  48: "12rem",
  52: "13rem",
  56: "14rem",
  60: "15rem",
  64: "16rem",
  72: "18rem",
  80: "20rem",
  96: "24rem",
} as const;
