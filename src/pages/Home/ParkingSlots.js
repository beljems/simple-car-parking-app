import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Modal from 'react-native-modal';
import ModalDropdown from 'react-native-modal-dropdown-v2';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconIons from 'react-native-vector-icons/Ionicons';
import IconAwe from 'react-native-vector-icons/FontAwesome';
import * as theme from '../../theme';
import styles from './Home.css.js';

const ParkingSlots = ({ parking }) => {
  const navigation = useNavigation();
  const [hours, setHours] = useState(1);
  const [active, setActive] = useState(null);
  const [visible, setVisible] = useState(true);
  const [hoursValue, setHoursValue] = useState('01:00');
  const [activeModal, setActiveModal] = useState(null);
  const [totalPrice, setTotalPrice] = useState(parking.price);

  // console.log(hoursValue);

  // useEffect(() => {
  //   setVisible(visible)
  // }, [])

  const handleParking = () => {
    setActiveModal(parking)
    setVisible(true)
  }

  const handleOrder = () => {
    navigation.navigate('Payment', {
      totalPrice: totalPrice
    })
    setVisible(!visible)
  }

  function hasDecimal(num) {
    return !!(num % 1);
  }

  const renderModal = () => {
    if (!activeModal) return null;     
     return(
       <Modal
        isVisible={visible}
        useNativeDriver
        style={styles.modalContainer}
        onBackButtonPress={() => setActiveModal(null)}
        onBackdropPress={() => setActiveModal(null)}
        onSwipeComplete={() => setActiveModal(null)}>
         <View style={styles.modal}>
          <Text style={styles.modalTitle}>
            {activeModal.title}
          </Text>
          <Text style={styles.modalDescription}>
            {activeModal.description}
          </Text>
          <View style={styles.modalInfo}>
            <View style={styles.modalIcon}>
              <Text>
                <IconIons name="pricetag" size={theme.SIZES.iconSmall} color={theme.COLORS.black} />
              </Text>
              <Text style={styles.modalInfoDetails}> ${activeModal.price}</Text>
            </View>
            <View style={styles.modalIcon}>
              <Text>
                <IconIons name="star" size={theme.SIZES.iconSmall} color={theme.COLORS.black} />
              </Text>
              <Text style={styles.modalInfoDetails}> {activeModal.rating}</Text>
            </View>
            <View style={styles.modalIcon}>
              <Text>
                <IconEntypo name="location-pin" size={theme.SIZES.iconSmall} color={theme.COLORS.black} />
              </Text>
              <Text style={styles.modalInfoDetails}> {activeModal.distance}km</Text>
            </View>
            <View style={styles.modalIcon}>
              <Text>
                <IconIons name="car-sport" size={theme.SIZES.iconSmall} color={theme.COLORS.black} />
              </Text>
              <Text style={styles.modalInfoDetails}> {activeModal.free}/{activeModal.spots}</Text>
            </View>
          </View>
          <View style={styles.modalHours}>
            <Text style={styles.modalPeriod}>Choose your Booking Period:</Text>
            <View style={styles.modalHoursDropdown}>
                <ModalDropdown 
                  defaultIndex={0}
                  defaultValue={hoursValue}
                  options={['01:00', '02:00', '03:00', '04:00', '05:00']}
                  style={styles.hoursDropdown}
                  dropdownStyle={styles.hoursDropdownStyle}
                  onSelect={(index, value) => {
                    setTotalPrice(activeModal.price * (index + 1))
                    setHours(index + 1);
                    setHoursValue(value);
                  }}
                />  
              <Text> hrs</Text>
            </View>
          </View>
          <TouchableOpacity 
            style={styles.payBtn}
            onPress={handleOrder}>
            <Text style={styles.payText}>
              Proceed to pay ${hasDecimal(totalPrice) === true ? totalPrice.toFixed(2) : totalPrice}
            </Text>
            <IconEntypo name='chevron-right' size={theme.SIZES.iconSmall * 1.75} color={theme.COLORS.white} />
          </TouchableOpacity>
        </View>
       </Modal>
     )
   }

  return (
    <View key={`parking-${parking.id}`} style={styles.parking}>
      <View style={styles.parkingColumn}>
        <Text style={styles.parkingTitle}>{parking.title}</Text>
        <Text style={styles.hoursPrice}>{parking.free} / {parking.spots}</Text>
        <View style={styles.hours}>
          <View style={styles.hoursInner}>
            <ModalDropdown 
              defaultIndex={0}
              defaultValue={hoursValue}
              options={['01:00', '02:00', '03:00', '04:00', '05:00']}
              style={styles.hoursDropdown}
              onSelect={(index, value) => {
                setTotalPrice(parking.price * (index + 1));
                setHoursValue(value);
                setHours(index + 1);
              }}
            />
            <Text> hrs</Text>
          </View>
        </View>
      </View>
      <View style={[styles.parkingColumn, styles.parkingColumnPrice]}>
        <View>
          <Text style={styles.icons}>
            <IconIons name="pricetag" size={theme.SIZES.iconSmall} color={theme.COLORS.black} />
             ${parking.price}
          </Text>
          <Text style={styles.icons}>
            <IconEntypo name="star" size={theme.SIZES.iconSmall} color={theme.COLORS.black} />
             {parking.rating}
          </Text>
        </View>
        <TouchableOpacity style={styles.buy} 
          onPress={handleParking}>
          <View style={styles.buyTotal}>
            <View style={styles.buyTotalInner}>
              <Text>
                <IconAwe name='dollar' size={theme.SIZES.iconSmall * 1.4} color={theme.COLORS.white} />
              </Text>
              <Text style={styles.buyTotalPrice}>{hasDecimal(totalPrice) === true ? totalPrice.toFixed(2) : totalPrice}</Text>
            </View>
            <Text style={{color: theme.COLORS.white}}>
              {parking.price} x {hours}hrs
            </Text>
          </View>
          <View style={styles.buyButton}>
            <IconEntypo name='chevron-right' size={theme.SIZES.iconSmall * 1.75} color={theme.COLORS.white} />
          </View>
        </TouchableOpacity>
      </View>
      {renderModal(parking)}
    </View>
  )
} 

export default ParkingSlots;