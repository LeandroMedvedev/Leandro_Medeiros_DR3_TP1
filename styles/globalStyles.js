import { StyleSheet } from 'react-native';

const colors = {
  white: '#fff',
  black: '#000',
  whiteSmoke: '#f8f8f8',
  lavenderBlush: '#faf5f6',
  wildSand: '#e7e4df',
  lightGrey: '#d2d2d2',
  moccaccino: '#5c2b2b',
  bilobaFlower: '#ab85eb',
  darkAubergine: '#2c001e',
  lightAubergine: '#77216f',
  ubuntuOrange: '#e95420',
  darkGold: '#c5b358',
  darkRed: '#ac1015',
  ciano: '#0f4d5f',
  skyBlue: '#61dafb',
  shuttleGrey: '#5f6368',
  ebony: '#282c34',
  midnightBlue: '#181a1f',
  githubGraffiti: '#151b23',
  blackRussian: '#03031b',
  githubGreen: '#3b8640',
};

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.ebony,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.white,
  },
});

export { globalStyles, colors };
