import EStyleSheet from 'react-native-extended-stylesheet';
const styles = EStyleSheet.create({
  content: {
    height: '95%',
    paddingHorizontal: '1rem',
    color: '$white'
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
    color: '$white'
  },
  desc: {
    marginTop: '2rem',
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
  buttonWrap: {
    width: '60%',
    alignSelf: 'center'
  },
});

export default styles;