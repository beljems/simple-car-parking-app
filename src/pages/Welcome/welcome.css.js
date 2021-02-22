import EStyleSheet from 'react-native-extended-stylesheet';
const styles = EStyleSheet.create({
  content: {
    display: 'flex',
    height: '100%',
    paddingHorizontal: '1rem',
    color: '$white',
    justifyContent: 'center'
  },
  name: {
    fontSize: '1.7rem',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  headingWrap: {
    marginTop: '1.5rem'
  },
  heading: {
    fontSize: '2rem',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '$skyblue'
  },
  desc: {
    marginTop: '1.5rem',
    fontSize: '1.2rem',
    textAlign: 'center'
  },
  iconWrap: () => ({
    ...EStyleSheet.value('$logo')
  }),
  iconParking: {},
  iconArrow: () => ({
    ...EStyleSheet.value('$logoArrow')
  })
});

export default styles;