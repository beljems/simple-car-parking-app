import EStyleSheet from 'react-native-extended-stylesheet';
const styles = EStyleSheet.create({
  content: {
    height: '88%',
    paddingHorizontal: '1rem',
    color: '$white',
  },
  inner: {
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
  },
  innerContent: {},
  name: {
    fontSize: '1.7rem',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '$skyblue'
  },
  heading: {
    fontFamily: '$fontRobotoBold',
    fontSize: '2rem',
    textAlign: 'center'
  },
  desc: {
    marginTop: '1.5rem',
    fontSize: '1.2rem',
    textAlign: 'center'
  },
  iconWrap: () => ({
    ...EStyleSheet.value('$logo'),
    marginTop: '2rem',
    width: '5rem',
    height: '5rem',
  }),
  iconWrapNoBg: {
    marginTop: '.5rem',
    backgroundColor: 'transparent'
  },
  iconParking: {},
  iconArrow: () => ({
    ...EStyleSheet.value('$logoArrow'),
    bottom: '-2.5rem'
  }),
});

export default styles;