const size = {
  mobileXs: "0px",
  mobileSm: "568px",
  tabletSm: "768px",
  tabletLg: "992px",
  laptop: "1200px",
  desktopSm: "1400px",
  desktopLg: "1920px",
};

export const device = {
  mobileXS: `(min-width: ${size.mobileX})`,
  mobileSM: `(min-width: ${size.mobileSm})`,
  tabletSM: `(min-width: ${size.tabletSm})`,
  tabletLG: `(min-width: ${size.tabletLg})`,
  laptop: `(min-width: ${size.laptop})`,
  desktopSM: `(min-width: ${size.desktopSm})`,
  desktopLg: `(min-width: ${size.desktopLg})`,
};

const colors = {
  headerbg: "#4aaacd",
  menubg: "#1487a9",
};

export const palette = {
  headerBG: colors.headerbg,
  menuBG: colors.menubg,
};
