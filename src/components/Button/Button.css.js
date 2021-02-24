import * as theme from '../../theme';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '3rem',
    backgroundColor: theme.COLORS.lighterRed,
    borderRadius: 5
  },
  text: {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: theme.COLORS.white,
    textAlign: 'center',
    letterSpacing: 1,
    textTransform: 'uppercase'
  }
});

export default styles;