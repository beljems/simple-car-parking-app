import * as theme from '../../theme';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  content: {
    height: '95%',
    paddingHorizontal: '1rem',
    color: theme.COLORS.black,
  },
  inner: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  heading: {
    marginTop: '3rem',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    textAlign: 'center',
    color: theme.COLORS.lighterRed, 
  },
  form: {
    marginTop: '2rem'
  },
  inputGroup: () => ({
    ...EStyleSheet.value('$inputGroup'),
    position: 'relative'
  }),
  input: {
    paddingLeft: '2.2rem'
  },
  icon: {
    position: 'absolute',
    top: '55%',
    left: '.8rem',
    zIndex: 1
  },
  buttonWrap: {
    marginTop: '2.5rem',
    width: '60%',
    alignSelf: 'center'
  },
  forgotLink: {
    marginLeft: 'auto'
  },
  forgotText: {
    fontSize: theme.SIZES.font,
    color: theme.COLORS.lighterRed
  },
  create: {
    marginTop: '.8rem',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  createLink: {
    marginLeft: '.2rem',
    fontSize: theme.SIZES.font,
    borderBottomWidth: 1,
    borderBottomColor: theme.COLORS.sky
  },
  createLinkText: {
    color: theme.COLORS.sky
  },
});

export default styles;