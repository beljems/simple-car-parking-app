import EStyleSheet from 'react-native-extended-stylesheet';
const styles = EStyleSheet.create({
  content: {
    height: '95%',
    paddingHorizontal: '1rem',
    color: '$black',
  },
  inner: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  welcome: {
    fontSize: '1.3rem',
    color: '$black',
    textAlign: 'center'
  },
  logo: {
    fontFamily: '$fontDancing',
    fontSize: '3rem',
    color: '$black',
    textAlign: 'center'
  },
  heading: {
    marginTop: '3rem',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '$black'
  },
  desc: {
    fontSize: '1rem',
    color: '$black'
  },
  form: {
    marginTop: '2rem'
  },
  inputGroup: () => ({
    ...EStyleSheet.value('$inputGroup'),
    position: 'relative'
  }),
  input: {
    paddingLeft: '2rem'
  },
  icon: {
    position: 'absolute',
    top: '55%',
    left: '.6rem',
    zIndex: 1
  },
  buttonWrap: {
    marginTop: '1rem',
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
    color: '$black',
  },
  createLink: {
    marginLeft: '.2rem',
    borderBottomWidth: 1,
    borderBottomColor: '$black'
  },
  createLinkText: {
    color: '$black',
  },
});

export default styles;