import * as theme from '../../theme';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  content: {
    height: '88%',
    paddingHorizontal: '1rem',
    color: theme.COLORS.sky,
  },
  inner: {
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
  },
  name: {
    fontSize: '1.7rem',
    fontWeight: 'bold',
    textAlign: 'center',
    color: theme.COLORS.lighterRed
  },
  heading: {
    fontFamily: theme.FONTS.robotoBold,
    fontSize: '2rem',
    textAlign: 'center',
    color: theme.COLORS.sky
  },
  desc: {
    marginTop: '1.5rem',
    fontSize: '1.2rem',
    textAlign: 'center',
    color: theme.COLORS.sky
  },
  iconWrap: () => ({
    ...EStyleSheet.value('$logo'),
    marginTop: '2rem',
    width: '5rem',
    height: '5rem',
  }),
  iconWrapNoBg: {
    marginTop: '.5rem',
    backgroundColor: 'transparent'
  },
  iconParking: {},
  iconArrow: () => ({
    ...EStyleSheet.value('$logoArrow'),
    bottom: '-2.5rem'
  }),
});

export default styles;