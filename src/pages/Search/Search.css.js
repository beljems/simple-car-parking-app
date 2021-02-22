import EStyleSheet from 'react-native-extended-stylesheet';
const styles = EStyleSheet.create({
  content: {
    margin: '-0.8rem',
    height: '120%',
    color: '$white'
  },
  headingWrap: () => ({
    ...EStyleSheet.value('$border')
  }),
  heading: () => ({
    ...EStyleSheet.value('$subMenuHeading')
  }),
  form: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
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
  input: {
  },
  inputWrap: {
    width: '75%'
  },
  button: {
    marginLeft: 'auto',
    width: '20%',
    marginTop: 0,
    borderRadius: 5,
    height: '2.5rem'
  },
  buttonSize: {
    paddingTop: '.8rem',
    fontSize: '.7rem'
  },
  list: {
    marginTop: '2rem'
  },
  item: () => ({
    ...EStyleSheet.value('$border'),
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  }),
  avatar: {
    marginRight: '.8rem'
  },
  name: {
    color: '$white',
    fontWeight: 'bold'
  },
  title: {
    color: '$white'
  },
  react: {
    width: '100%',
    marginTop: '1.2rem'
  },
  heart: {
    width: '1.8rem',
    backgroundColor: '$white',
    borderRadius: 100
  }
});

export default styles;