import EStyleSheet from 'react-native-extended-stylesheet';
const styles = EStyleSheet.create({
  wrap: {
  },
  menu: {
    marginTop: '1rem',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  item: {
    flex: 1,
    paddingBottom: '.5rem',
    marginBottom: '-0.5rem'
  },
  text: {
    textAlign: 'center'
  },
  settings: {
    backgroundColor: '$lighterRed'
  },
  active: {
    borderBottomWidth: 3,
    borderBottomColor: '$white' 
  }
});

export default styles;