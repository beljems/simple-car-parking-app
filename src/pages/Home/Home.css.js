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
    flex: 1,
    flexDirection: 'row',
    padding: '1rem',
    backgroundColor: theme.COLORS.white,
    position: 'absolute',
    right: 0,
    left: 0,
    top: 0,
    zIndex: 1,
  },
  headerInner: {
    flex: 1, 
    justifyContent: 'flex-start'
  },
  headerTitle: {
    color: theme.COLORS.gray,
  },
  headerLocation: {
    marginTop: '.2rem',
    fontSize: theme.SIZES.font,
    fontFamily: theme.FONTS.robotoBold,
  },
  headerIcon: { 
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'flex-end', 
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
    backgroundColor: theme.COLORS.white,
    borderRadius: 8,
    padding: '1rem',
    marginHorizontal: '.2rem',
    width: width - 40,
  },
  parkingColumn: {
    flexDirection: 'column',
    width: '30%'
  },
  parkingColumnPrice: {
    flexDirection: 'row',
    width: '70%',
  },
  marker: {
    flexDirection: 'row',
    backgroundColor: theme.COLORS.white,
    borderRadius: 10,
    padding: '.5rem',
    borderWidth: 1,
    borderColor: theme.COLORS.gray,
  },
  markerPrice: { 
    color: theme.COLORS.lighterRed, 
    fontWeight: 'bold', 
  },
  markerStatus: { 
    color: theme.COLORS.gray
  },
  active: {
    borderColor: theme.COLORS.lighterRed,
  },
  payBtn: {
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem',
    backgroundColor: theme.COLORS.lighterRed,
  },
  payText: {
    fontFamily: theme.FONTS.robotoBold,
    fontSize: '1.2rem',
    color: theme.COLORS.white,
  },
  parking: {
    flexDirection: 'row',
    backgroundColor: theme.COLORS.white,
    borderRadius: 6,
    padding: '1rem',
    marginHorizontal: '1.5rem',
    width: width - (24 * 2),
  },
  parkingTitle: {
    fontSize: theme.SIZES.font,
    fontFamily: theme.FONTS.robotoBold
  },
  buy: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: '.5rem',
    paddingHorizontal: '1rem',
    paddingVertical: '1rem',
    backgroundColor: theme.COLORS.lighterRed,
    borderRadius: 6,
  },
  buyButton: {
    // flex: 0.5, 
    justifyContent: 'center', 
    marginLeft: 'auto'
  },
  buyTotalInner: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '2.5rem'
  },
  buyTotalPrice: {
    marginLeft: '.3rem',
    fontSize: '2rem',
    color: theme.COLORS.white
  },
  hours: {
    marginTop: '.8rem',
    flexDirection: 'row',
    marginLeft: '.5rem',
  },
  hoursInner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icons: {
    marginRight: '1rem',
    marginBottom: '1rem'
  },
  hoursDropdown: {
    marginLeft: '-0.4rem',
    borderRadius: 8,
    borderColor: theme.COLORS.gray,
    borderWidth: 1,
    paddingVertical: '.3rem',
    paddingHorizontal: '.5rem'
  },
  modalContainer: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  modal: {
    flexDirection: 'column',
    height: height * 0.75,
    padding: '1.5rem',
    backgroundColor: theme.COLORS.white,
    borderTopLeftRadius: '1rem',
    borderTopRightRadius: '1rem',
  },
  modalTitle: {
    fontSize: '2rem',
    fontFamily: theme.FONTS.robotoBold
  },
  modalDescription: {
    marginVertical: '1rem',
    fontSize: '1.1rem',
    color: theme.COLORS.gray
  },
  modalInfo: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: '1rem',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: theme.COLORS.gray,
    borderBottomColor: theme.COLORS.gray,
  },
  modalInfoDetails: {
    fontSize: '1.1rem'
  },
  modalIcon: {
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  modalHours: {
    paddingVertical: height * 0.15,
  },
  modalPeriod: {
    textAlign: 'center',
    fontSize: '1.1rem'
  },
  modalHoursDropdown: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: '1rem',
  },
});

export default styles;