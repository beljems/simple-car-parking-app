import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build({ 
  $red: '#f00',
  $gray: '#7D818A',
  $lightGray: '#d6d6d6',
  $lighterRed: '#d95965',
  $white: '#fff',
  $dark: '#2b2b2b',
  $black: '#000',
  $skyblue: '#42c2f5',

  $fontDancing: 'DancingScript-Regular',
  $fontRoboto: 'Roboto-Regular',
  $fontRobotoBold: 'Roboto-Bold',

  $inputGroup: {
    marginBottom: '1rem'  
  },
  $input: {
    paddingHorizontal: '1rem',
    height: '3rem',
    backgroundColor: '$dark',
    color: '$white',
    borderRadius: 5,
    borderColor: '$gray',
    borderWidth: 1
  },
  $border: {
    paddingBottom: '.5rem',
    marginBottom: '1.5rem',
    borderBottomWidth: 1,
    borderBottomColor: '$lightGray' 
  },
  $subMenuHeading: {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '$white'
  },
  $logo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '4rem',
    height: '4rem',
    borderRadius: 100,
    alignSelf: 'center',
    backgroundColor: '$skyblue'
  },
  $logoArrow: {
    position: 'absolute',
    bottom: '-1.5rem',
    left: 0,
    right: 0,
    textAlign: 'center'
  },
});