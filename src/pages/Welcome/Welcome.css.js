import * as theme from '../../theme';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  content: {
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
    paddingHorizontal: '1rem',
    color: theme.COLORS.sky,
  },
  headingWrap: {
    marginTop: '1.5rem'
  },
  heading: {
    fontSize: '2rem',
    fontWeight: 'bold',
    textAlign: 'center',
    color: theme.COLORS.lighterRed
  },
  iconWrap: () => ({
    ...EStyleSheet.value('$logo')
  }),
  iconArrow: () => ({
    ...EStyleSheet.value('$logoArrow')
  })
});

export default styles;
