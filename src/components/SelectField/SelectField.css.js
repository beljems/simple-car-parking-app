import EStyleSheet from 'react-native-extended-stylesheet';
const styles = EStyleSheet.create({
  selectWrap: () => ({
    ...EStyleSheet.value('$input'),
    paddingHorizontal: 0,
    position: 'relative'
  }),
  select: {
    paddingHorizontal: '1rem',
    paddingTop: '.8rem',
    width: '100%',
    height: '100%',
    color: '$white',
    borderRadius: 5,
  },
  arrow: {
    position: 'absolute',
    right: 8,
    top: '20%',
  },
  label: {
    marginBottom: '0.5rem',
    fontSize: '.9rem',
    color: '$white'
  }
});

export default styles;