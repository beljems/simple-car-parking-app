import * as theme from '../../theme';
import EStyleSheet from 'react-native-extended-stylesheet';
const styles = EStyleSheet.create({
  content: {
    height: '95%',
    paddingHorizontal: '1rem',
    color: theme.COLORS.sky
  },
  inner: {
    paddingTop: '3rem',
  },
  headingWrap: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  back: {
    marginRight: '1rem'
  },
  heading: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: theme.COLORS.sky
  },
  desc: {
    marginTop: '2rem',
    fontSize: theme.SIZES.font,
    color: theme.COLORS.sky
  },
  form: {
    marginTop: '2rem'
  },
  inputGroup: () => ({
    ...EStyleSheet.value('$inputGroup'),
    position: 'relative'
  }),
  inputGroupTerms: {
    flexDirection: 'row',
  },
  input: {
    height: '2.5rem',
  },
  buttonWrap: {
    marginTop: '1rem',
    width: '60%',
    alignSelf: 'center'
  },
});

export default styles;