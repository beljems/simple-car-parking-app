import EStyleSheet from 'react-native-extended-stylesheet';
const styles = EStyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
  },
  content: {
    height: '100%'
  },
  inner: {
    height: '100%',
    padding: '2rem',
  },
  innerScroll: {},
  innerWrap: {
    width: '100%',
    height: '86.2%',
  },
  scrollWrap: {
    width: '100%',
    height: '86%',
  },
  headerWrap: {
    padding: '.5rem',
    backgroundColor: '$skyblue'
  },
  header: {
    marginTop: '.5rem',
    textAlign: 'center',
    color: '$white',
    fontFamily: '$fontRobotoBold',
    fontSize: '1.7rem',
  },
  settingWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '-1.8rem',
    paddingHorizontal: '.5rem'
  },
  back: {
    color: '$white',
  },
  menu: {
    marginLeft: 'auto',
  },
  menutext: {
    fontFamily: '$fontRobotoBold',
    color: '$white',
    letterSpacing: 1.2,
    textTransform: 'uppercase',
  },
  footer: {
    width: '100%',
    height: '2rem',
    backgroundColor: '$skyblue',
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100
  }
});

export default styles;