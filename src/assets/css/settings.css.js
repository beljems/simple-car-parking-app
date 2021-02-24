import * as theme from '../../theme';
import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build({ 
  $inputGroup: {
    marginBottom: '1rem'  
  },
  $input: {
    paddingHorizontal: '1rem',
    height: '3rem',
    fontSize: theme.SIZES.font,
    color: theme.COLORS.sky,
    backgroundColor: theme.COLORS.inputColor,
    borderRadius: 20,
  },
  $border: {
    paddingBottom: '.5rem',
    marginBottom: '1.5rem',
    borderWidth: 1,
    borderBottomColor: theme.COLORSlightGray
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
    backgroundColor: theme.COLORS.lighterRed
  },
  $logoArrow: {
    position: 'absolute',
    bottom: '-1.5rem',
    left: 0,
    right: 0,
    textAlign: 'center'
  },
});