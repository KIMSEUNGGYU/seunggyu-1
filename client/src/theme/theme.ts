const lightBackgroundColor = '#f8f8f8';
const darkBackgroundColor = '#303437';

const darkBackgroundOverley = {
  0: '#121212', // 0
  1: '#1f1f1f', // 5
  2: '#242424', // 7
  3: '#262626', // 8
  4: '#292929', // 9
  6: '#2e2e2e', // 11
  8: '#303030', // 12
  12: '#363636', // 14
  16: '#383838', // 15
  24: '#3b3b3b', // 16
};

const lightTextColor = {
  title: 'rgb(55, 53, 47)',
  primaryText: 'rgb(55, 53, 47)',
  // secondaryText: 'rgba(0, 0, 0, 0.45)',
  // disableText: 'rgba(0, 0, 0, 0.25)',
  border: 'rgba(0, 0, 0, 0.15)',
  // dividers: 'rgba(0, 0, 0, 0.06)',
  // background: 'rgba(0, 0, 0, 0.04)',
  // tableHeader: 'rgba(0, 0, 0, 0.02)',
};

const darkTextColor = {
  title: 'rgba(255, 255, 255, 0.9)',
  primaryText: 'rgba(255, 255, 255, 0.9)',
  // secondaryText: 'rgba(255, 255, 255, 0.45)',
  // disableText: 'rgba(255, 255, 255, 0.30)',
  // border: 'rgb(228, 227, 226)',
  border: 'rgba(255, 255, 255, 0.20)',
  // dividers: 'rgba(255, 255, 255, 0.12)',
  // background: 'rgba(255, 255, 255, 0.08)',
  // tableHeader: 'rgba(255, 255, 255, 0.04)',
};

const lightMainColor = {
  normal: '#1890ff',
  hover: '#40a9ff',
  active: '#096dd9',
};

const darkMainColor = {
  normal: '#177ddb', // 6
  hover: '#1664ac', // 5
  active: '#3b9ae7', // 7
};

export const lightTheme = {
  backgroundColor: lightBackgroundColor,
  titleColor: lightTextColor.title,
  mainColor: lightMainColor.normal,
  primaryColor: lightTextColor.primaryText,
  activeColor: lightMainColor.active,
  hoverColor: lightMainColor.hover,
  border: `1px solid ${lightTextColor.border}`,
  listBoxColor: 'white',
  seriesTitleBoxColor: '#E9ECEF',
  seriesListBoxColor: 'white',
  dialogBackgroundColor: 'white',
  burgerMenuBackgroundColor: 'white',
  boxShadow: '0 5px 10px rgba(100, 100, 100, 0.15), 0 2px 4px rgba(100, 100, 100, 0.15)',

  CODE_INLINE: '#EB5757',
  CODE_BACKGROUND: '#f7f6f3',
  A_LINK: 'rgba(55,53,47,0.4)',
  QUOTE_COLOR: 'baack',
  // post
  postBackgroundColor: '#fff',
  postTextColor: 'rgb(55, 53, 47)',
};

export const darkTheme = {
  backgroundColor: darkBackgroundColor,
  titleColor: darkTextColor.title,
  mainColor: darkMainColor.normal,
  primaryColor: darkTextColor.primaryText,
  activeColor: darkMainColor.active,
  hoverColor: darkMainColor.hover,
  border: `1px solid ${darkTextColor.border}`,
  listBoxColor: '#3E4447',
  seriesTitleBoxColor: '#3E4447',
  seriesListBoxColor: darkBackgroundOverley[24],
  dialogBackgroundColor: darkBackgroundOverley[2],
  burgerMenuBackgroundColor: darkBackgroundOverley[2],
  boxShadow: '0px 5px 10px rgba(40, 40, 40, 1), 0px 2px 4px rgba(40, 40, 40, 1)',

  CODE_INLINE: '#EB5757',
  CODE_BACKGROUND: '#3E4447',
  A_LINK: 'rgba(255,255,255,0.4)',
  QUOTE_COLOR: 'rgba(255, 255, 255, 0.9)',

  // post
  postBackgroundColor: '#303437',
  postTextColor: 'rgba(255, 255, 255, 0.9)',
};

export const theme = {
  lightTheme,
  darkTheme,
};

export type ThemeType = typeof lightTheme;
