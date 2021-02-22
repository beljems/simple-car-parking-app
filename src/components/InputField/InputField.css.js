import EStyleSheet from 'react-native-extended-stylesheet';
const styles = EStyleSheet.create({
  input: () => ({
    ...EStyleSheet.value('$input')
  }),
  textarea: () => ({
    ...EStyleSheet.value('$input'),
    height: '4rem'
  }),
  label: {
    marginBottom: '0.5rem',
    fontSize: '.9rem',
    color: '$black'
  }
});

export default styles;