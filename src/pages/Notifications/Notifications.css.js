import EStyleSheet from 'react-native-extended-stylesheet';
const styles = EStyleSheet.create({
  content: {
    height: '120%',
    color: '$white',
  },
  headingWrap: () => ({
    ...EStyleSheet.value('$border')
  }),
  heading: () => ({
    ...EStyleSheet.value('$subMenuHeading')
  }),
  list: {
    flexDirection: 'column'
  },
  item: () => ({
    ...EStyleSheet.value('$border'),
    flexDirection: 'row',
    alignItems: 'center'
  }),
  avatar: {
    marginRight: '.8rem'
  },
  name: {
    color: '$white',
    fontWeight: 'bold'
  },
  react: {
    color: '$white',
    fontStyle: 'italic'
  },
  title: {
    color: '$white'
  }
});

export default styles;