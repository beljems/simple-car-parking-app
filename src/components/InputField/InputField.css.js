import * as theme from '../../theme';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  input: () => ({
    ...EStyleSheet.value('$input')
  }),
  textarea: () => ({
    ...EStyleSheet.value('$input'),
    height: '4rem'
  }),
  label: {
    marginBottom: '0.5rem',
    fontSize: theme.SIZES.font,
    color: theme.COLORS.sky
  }
});

export default styles;