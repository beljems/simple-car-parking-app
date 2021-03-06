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
  buttonWrap: {
    width: '60%',
    alignSelf: 'center'
  },
  create: {
    marginTop: '2rem',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  createText: {
    color: theme.COLORS.sky,
  },
  createLink: {
    marginLeft: '.2rem',
    borderBottomWidth: 1,
    borderBottomColor: theme.COLORS.sky
  },
  createLinkText: {
    color: theme.COLORS.sky,
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
  }
});

export default styles;