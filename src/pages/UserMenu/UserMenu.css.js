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
  item: {
    flexDirection: 'row',
    marginBottom: '1rem',
    alignItems: 'center'
  },
  itemSettings: {
    
  },
  itemInner: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: '.5rem',
    width: '2rem',
    textAlign: 'center'
  },
  text: {
    color: '$white'
  },
  arrow: {
    marginLeft: 'auto'
  },
  settings: {
    marginTop: '1rem'
  },
});

export default styles;