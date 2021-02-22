import EStyleSheet from 'react-native-extended-stylesheet';
const styles = EStyleSheet.create({
  content: {
    height: '95%',
    paddingHorizontal: '1rem',
    color: '$white'
  },
  inner: {
    paddingTop: '3rem',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  headingWrap: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  back: {
    marginRight: '1rem'
  },
  welcome: {
    fontSize: '1.3rem',
    color: '$white',
    textAlign: 'center'
  },
  logo: {
    fontFamily: '$fontDancing',
    fontSize: '3rem',
    color: '$white',
    textAlign: 'center'
  },
  heading: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '$white'
  },
  desc: {
    fontSize: '1rem',
    color: '$white'
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
  forgotLink: {
    marginLeft: 'auto'
  },
  forgotText: {
    color: '$lighterRed'
  },
  create: {
    marginTop: '2rem',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  createText: {
    color: '$white',
  },
  createLink: {
    marginLeft: '.2rem',
    borderBottomWidth: 1,
    borderBottomColor: '$white'
  },
  createLinkText: {
    color: '$white',
  },
  terms: {
    color: '$white',
  },
  check: {
    marginRight: '.5rem',
    width: '1rem',
    height: '1rem',
    fontSize: 0,
    borderWidth: 1,
    borderColor: '$white',
    position: 'relative',
    overflow: 'hidden',
    zIndex: 1
  },
  agree: {
    position: 'absolute',
    left: 0,
    top: '-0.03rem',
  }
});

export default styles;