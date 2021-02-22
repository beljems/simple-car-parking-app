import EStyleSheet from 'react-native-extended-stylesheet';
const styles = EStyleSheet.create({
  content: {
    height: '120%',
    color: '$white'
  },
  headingWrap: () => ({
    ...EStyleSheet.value('$border')
  }),
  heading: () => ({
    ...EStyleSheet.value('$subMenuHeading')
  }),
  inner: {
    alignItems: 'center',
    width: '100%',
    height: '50%',
    flexDirection: 'row'
  },
  text: {
    color: '$white',
    textAlign: 'center'
  },
  textBig: {
    marginBottom: '1rem',
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
  buttonWrap: {
    width: '60%',
    alignSelf: 'center'
  },
});

export default styles;