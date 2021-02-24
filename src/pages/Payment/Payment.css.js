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
    flex: 1,
    flexDirection: 'column'
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
  icon: {
    position: 'absolute',
    top: '55%',
    left: '.6rem',
    zIndex: 1
  },
  total: {
    marginVertical: '2rem',
    flexDirection: 'row',
    alignItems: 'center'
  },
  totalText: {
    fontFamily: theme.FONTS.robotoBold,
    fontSize: '1.5rem',
    color: theme.COLORS.sky
  },
  totalPrice: {
    marginLeft: 'auto',
    paddingVertical: '.2rem', 
    paddingHorizontal: '2rem', 
    color: theme.COLORS.black,
    backgroundColor: theme.COLORS.white
  },
  buttonWrap: {
    width: '60%',
    alignSelf: 'center'
  },
  terms: {
    color: theme.COLORS.sky,
  },
  check: {
    marginRight: '.5rem',
    width: '1rem',
    height: '1rem',
    fontSize: 0,
    borderWidth: 1,
    borderColor: theme.COLORS.sky,
    position: 'relative',
    overflow: 'hidden',
    zIndex: 1
  },
  agree: {
    position: 'absolute',
    left: 0,
    top: '-0.03rem',
  },
  success: {
    marginTop: '2.5rem',
    fontSize: theme.SIZES.font,
    color: theme.COLORS.sky
  },
  thankyou: {
    marginTop: '1rem',
    fontSize: theme.SIZES.font,
    color: theme.COLORS.sky
  }
});

export default styles;