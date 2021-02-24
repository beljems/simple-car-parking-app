import * as theme from '../../theme';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    backgroundColor: theme.COLORS.base // remove background color on content
  },
  content: {
    height: '100%'
  },
  inner: {
    height: '100%',
    padding: '2rem',
  },
  innerWrap: {
    width: '100%',
    height: '86.2%',
  },
  scrollWrap: {
    width: '100%',
    height: '86%',
  },
  headerWrap: {
    padding: '.5rem',
    backgroundColor: theme.COLORS.base
  },
  header: {
    marginTop: '.5rem',
    textAlign: 'center',
    color: theme.COLORS.lighterRed,
    fontFamily: theme.FONTS.robotoBold,
    fontSize: '1.7rem',
  },
  settingWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '-1.8rem',
    paddingHorizontal: '.5rem'
  },
  back: {
    color: theme.COLORS.sky,
  },
  menu: {
    marginLeft: 'auto'
  },
  menutext: {
    fontFamily: theme.FONTS.robotoBold,
    color: theme.COLORS.sky,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
  },
  footer: {
    width: '100%',
    height: '2rem',
    backgroundColor: theme.COLORS.base,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100
  }
});

export default styles;