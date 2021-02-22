import * as theme from '../../theme';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('screen');
const styles = EStyleSheet.create({
  content: {
    margin: '-2rem',
    flex: 1,
  },
  inner: {
    flex: 1,
    height: '100%'
  }, 
  map: {
    height: '105%',
    position: 'absolute',
    right: 0,
    left: 0,
    top: 0
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: '1rem',
    flex: 1,
    position: 'absolute',
    right: 0,
    left: 0,
    top: 0,
    zIndex: 1,
    backgroundColor: '$white'
  },
  headerTitle: {
    color: theme.COLORS.gray,
  },
  headerLocation: {
    fontSize: theme.SIZES.font,
    fontWeight: '500',
    paddingVertical: theme.SIZES.base / 3,
  },
  headerIcon :{ 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'flex-end', 
  },
  headerLocationInfo : {
   flex: 1, 
   justifyContent: 'center' 
  },
  parkings: {
    flex: 1,
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 0
  },
  parking: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: '1rem',
    marginHorizontal: 20,
    width: width - 40,
  },
  parkingColumn: {
    flexDirection: 'column'
  },
  parkingColumnPrice: {
    flexDirection: 'row'
  },
  marker: {
    flexDirection: 'row',
    backgroundColor: theme.COLORS.white ,
    borderRadius: 10,
    padding: '.5rem',
    borderWidth: 1,
    borderColor: '$gray',
  },
  markerPrice: { 
    color: '$lighterRed', 
    fontWeight: 'bold', 
  },
  markerStatus: { 
    color: '$gray'
  },
  buy: {
    flex: 1,
    backgroundColor : 'red'
  },
  active: {
    borderColor: '#D83C54',
  },
  modalContainer: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  modal: {
    flexDirection: 'column',
    height: height * 0.75,
    padding: theme.SIZES.base * 2,
    backgroundColor: theme.COLORS.white,
    borderTopLeftRadius: theme.SIZES.base,
    borderTopRightRadius: theme.SIZES.base,
  },
  modalInfo: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: theme.SIZES.base,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: theme.COLORS.overlay,
    borderBottomColor: theme.COLORS.overlay,
  },
  modalHours: {
    paddingVertical: height * 0.15,
  },
  modalHoursDropdown: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: theme.SIZES.base,
  },
 payBtn: {
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.SIZES.base * 1.5,
    backgroundColor: theme.COLORS.red,
  },
  payText: {
    fontWeight: '600',
    fontSize: theme.SIZES.base * 1.5,
    color: theme.COLORS.white,
  },
  parking: {
    flexDirection: 'row',
    backgroundColor: theme.COLORS.white,
    borderRadius: 6,
    padding: theme.SIZES.base,
    marginHorizontal: theme.SIZES.base * 2,
    width: width - (24 * 2),
  },
  buy: {
    flex: 1,
    // flexDirection: 'row',
    paddingHorizontal: theme.SIZES.base * 1.5,
    paddingVertical: theme.SIZES.base,
    backgroundColor: theme.COLORS.red,
    borderRadius: 6,
  },
  parkingInfo : {
    justifyContent: 'space-evenly',
    marginHorizontal : theme.SIZES.base * 1.5
  },
  parkingIcon : {
    flexDirection : 'row', 
    justifyContent : 'space-between', 
  },
  buyButton : {
    flex : 0.5, 
    justifyContent : 'center', 
    alignItems : 'flex-end'
  },
  buyTotalPrice : {
    color: theme.COLORS.white,
    fontSize: theme.SIZES.base * 2,
    fontWeight: '600',
    paddingLeft: theme.SIZES.base / 4,fontSize : 25, 
    color : theme.COLORS.white
  },
  buyTotalPrice : {
    fontSize : 25, 
    color : theme.COLORS.white
  },
  hours: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: theme.SIZES.base / 2,
    justifyContent: 'space-evenly',
  },
  hoursTitle: {
    fontSize: theme.SIZES.text,
    fontWeight: '500',
  },
  hoursDropdown: {
    borderRadius: theme.SIZES.base / 2,
    borderColor: theme.COLORS.overlay,
    borderWidth: 1,
    paddingHorizontal: theme.SIZES.base,
    paddingVertical: theme.SIZES.base/1.5,
    marginRight: theme.SIZES.base / 2,
  },
  hoursDropdownStyle: {
    marginLeft: -theme.SIZES.base,
    paddingHorizontal: theme.SIZES.base / 2,
    marginVertical: -(theme.SIZES.base + 1),
  },
});

export default styles;