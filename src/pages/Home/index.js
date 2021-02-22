import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  ScrollView,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import Modal from 'react-native-modal';
import Dropdown from 'react-native-modal-dropdown';
import * as theme from '../../theme';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconIons from 'react-native-vector-icons/Ionicons';
import IconAwe from 'react-native-vector-icons/FontAwesome';
import MapView from 'react-native-maps';
import Page from './../../components/Page';
import styles from './Home.css.js';

const Home = ({navigation}) => {
  const {Marker} = MapView;
  const [hours, setHours] = useState(null);
  const [active, setActive] = useState(null);
  const [activeModal, setActiveModal] = useState(null);
  const [totalPrice, setTotalPrice] = useState(null);
  const parkingsArea = [
    {
      id: 1,
      title: 'Parking 1',
      price: 5,
      rating: 4.2,
      spots: 20,
      free: 10,
      coordinate: {
        latitude: 37.78735,
        longitude: -122.4334,
      },
      distance : 2.5,
      description: `Description about this parking lot
  
  Open year 2018
  Secure with CTV`,
    },
    {
      id: 2,
      title: 'Parking 2',
      price: 7,
      rating: 3.8,
      spots: 25,
      free: 20,
      coordinate: {
        latitude: 37.78845,
        longitude: -122.4344,
      },
      distance : 3.5,
      description: `Description about this parking lot
  
  Open year 2018
  Secure with CTV`,
    },
    {
      id: 3,
      title: 'Parking 3',
      price: 10,
      rating: 4.9,
      spots: 50,
      free: 25,
      coordinate: {
        latitude: 37.78615,
        longitude: -122.4314,
      },
      distance : 1,
      description: `Description about this parking lot
  
  Open year 2018
  Secure with CTV`,
    },
  ];

  useEffect(() => {
    // setHours({ hours });
    setTotalPrice()
  }, []);

  const renderParkingSpots = (parking) => {
    return (
      <View key={`parking-${parking.id}`} style={styles.parking}>
      <View style={styles.parkingColumn}>
        <View style={styles.hours}>
          <Text style={styles.hoursTitle}>x {parking.spots} {parking.title}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Dropdown 
              defaultIndex={0}
              defaultValue={'01:00'}
              options={['01:00', '02:00', '03:00', '04:00', '05:00']}
              style={styles.hoursDropdown}
              onSelect={(index) => {
                setTotalPrice(parking.price * (index + 1));
                setHours(index + 1);
              }}
            />
            <Text style={{ color: theme.COLORS.gray }}>hrs</Text>
          </View>
        </View>
      </View>
      <View style={[styles.parkingColumn, styles.parkingColumnPrice]}>
        <Text>
          <IconIons name="pricetag" size={16} color="#000" />
          ${parking.price}
        </Text>
        <Text>
          <IconEntypo name="star" size={16} color="#000" />
          {parking.rating}
        </Text>
        <TouchableOpacity style={styles.buy} 
          onPress={() => setActiveModal(parking)}>
          <View style={styles.buyTotal}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <IconAwe name='dollar' size={theme.SIZES.icon * 1.25} color={theme.COLORS.white} />
              <Text style={styles.buyTotalPrice}>{totalPrice}</Text>
            </View>
            <Text style={{ color: theme.COLORS.white }}>
              {parking.price}x{hours} hrs
            </Text>
          </View>
          <View style={styles.buyButton}>
            <IconEntypo name='chevron-right' size={theme.SIZES.icon * 1.75} color={theme.COLORS.white} />
          </View>
        </TouchableOpacity>
      </View>
      {renderModal(parking)}
    </View>
    
    )
  } 
  
  const renderHeader = () => { 
    return(
      <View style={styles.header}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text style={styles.headerTitle}>Detected location</Text>
          <Text style={styles.headerLocation}>San Francisco, US</Text>
        </View>
        <View style={styles.headerIcon }>
          <TouchableWithoutFeedback>
            <IconEntypo name="menu" size={35} />
          </TouchableWithoutFeedback>
        </View>
      </View>
    )
 } 

 const renderModal = () => {
   if (!activeModal) return null;     
    return(
      <Modal
      isVisible
      useNativeDriver
      style={styles.modalContainer}
      onBackButtonPress={() => setActiveModal(null)}
      onBackdropPress={() => setActiveModal(null)}
      onSwipeComplete={() => setActiveModal(null)}
      >
        <View style={styles.modal}>
          <View>
            <Text style={{ fontSize: theme.SIZES.font * 1.5 }}>
              {activeModal.title}
            </Text>
          </View>
          <View style={{ paddingVertical: theme.SIZES.base }}>
            <Text style={{ color: theme.COLORS.gray, fontSize: theme.SIZES.font * 1.1 }}>
              {activeModal.description}
            </Text>
          </View>
          <View style={styles.modalInfo}>
            <View style={[styles.parkingIcon, {justifyContent: 'flex-start'} ]}>
              <IconIons name="pricetag" size={16} color="#000" />
              <Text style={{ fontSize: theme.SIZES.icon * 1.15 }}> ${activeModal.price}</Text>
            </View>
            <View style={[styles.parkingIcon, {justifyContent: 'flex-start'} ]}>
              <IconIons name="star" size={16} color="#000" />
              <Text style={{ fontSize: theme.SIZES.icon * 1.15 }}> {activeModal.rating}</Text>
            </View>
            <View style={[styles.parkingIcon, {justifyContent: 'flex-start'} ]}>
              <IconEntypo name="location-pin" size={16} color="#000" />
              <Text style={{ fontSize: theme.SIZES.icon * 1.15 }}> {activeModal.distance}km</Text>
            </View>
            <View style={[styles.parkingIcon, {justifyContent: 'flex-start'} ]}>
              <IconIons name="car-sport" size={16} color="#000" />
              <Text style={{ fontSize: theme.SIZES.icon * 1.15 }}> {activeModal.free}/{activeModal.spots}</Text>
            </View>
          </View>
          <View style={styles.modalHours}>
            <Text style={{ textAlign: 'center', fontWeight: '500' }}>Choose your Booking Period:</Text>
            <View style={styles.modalHoursDropdown}>
                <Dropdown 
                  defaultIndex={0}
                  defaultValue={'01:00'}
                  options={['01:00', '02:00', '03:00', '04:00', '05:00']}
                  style={styles.hoursDropdown}
                  dropdownStyle={styles.hoursDropdownStyle}
                  onSelect={(index) => setTotalPrice(activeModal.price * (index + 1))}
                />  
              <Text style={{ color: '#000' }}>hrs</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.payBtn}>
            <Text style={styles.payText}>
              Proceed to pay ${totalPrice}
            </Text>
            <IconEntypo name='chevron-right' size={theme.SIZES.icon * 1.75} color={theme.COLORS.white} />
          </TouchableOpacity>
        </View>
      </Modal>
    )
  }

  const renderParkings = () => {
    return (<FlatList 
      horizontal 
      pagingEnabled
      scrollEnabled
      showsHorizontalScrollIndicator = {false}
      scrollEventThrottle={16}
      snapToAlignment="center"
      style={styles.parkings}
      data={parkingsArea}
      keyExtractor={(item, index) => `${item.id}`}
      renderItem={({ item }) => 
        renderParkingSpots(item)} />)
  } 

  return (
    <Page 
      showHeader={true}
      showSetting={true}
      showFooter={false}
      showBack={true}>
      <View style={styles.content}>
        {renderHeader()}
        <View style={styles.inner}>
          <MapView
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
            showsUserLocation={true}
            style={styles.map}
            >
            {parkingsArea.map(parking =>
            <Marker 
              key={`marker-${parking.id}`}
              coordinate={parking.coordinate}>
              <View style={[
                styles.marker, 
                active === parking.id ? styles.active : null
                ]}>
                <Text style={styles.markerPrice}>${parking.price}</Text>
                <Text style={styles.markerStatus}> ({parking.free}/{parking.spots})</Text>
              </View>
            </Marker>
            )}
        </MapView>
        {renderParkings()}
        </View>
      </View>
    </Page>
  );
};

export default Home;
