const darkBackgroundColor = '#121212';
const lightBackgroundColor = '#f8f8f8';

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

// ant design Neutral Color Palette
// 디자인 적용된 값으로 사용하지 않은 값들은 주석으로 비활성화
const lightTextColor = {
  title: 'rgba(0, 0, 0, 0.85)',
  primaryText: 'rgba(0, 0, 0, 0.65)',
  // secondaryText: 'rgba(0, 0, 0, 0.45)',
  // disableText: 'rgba(0, 0, 0, 0.25)',
  border: 'rgba(0, 0, 0, 0.15)',
  // dividers: 'rgba(0, 0, 0, 0.06)',
  // background: 'rgba(0, 0, 0, 0.04)',
  // tableHeader: 'rgba(0, 0, 0, 0.02)',
};

const darkTextColor = {
  title: 'rgba(255, 255, 255, 0.85)',
  primaryText: 'rgba(255, 255, 255, 0.65)',
  // secondaryText: 'rgba(255, 255, 255, 0.45)',
  // disableText: 'rgba(255, 255, 255, 0.30)',
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
};

export const darkTheme = {
  backgroundColor: darkBackgroundColor,
  titleColor: darkTextColor.title,
  mainColor: darkMainColor.normal,
  primaryColor: darkTextColor.primaryText,
  activeColor: darkMainColor.active,
  hoverColor: darkMainColor.hover,
  border: `1px solid ${darkTextColor.border}`,
  listBoxColor: darkBackgroundOverley[1],
  seriesTitleBoxColor: darkBackgroundOverley[8],
  seriesListBoxColor: darkBackgroundOverley[1],
};

export const theme = {
  lightTheme,
  darkTheme,
};

export type ThemeType = typeof lightTheme;
