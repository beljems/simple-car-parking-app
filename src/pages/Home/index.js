import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import IconAwe from 'react-native-vector-icons/FontAwesome';
import MapView from 'react-native-maps';
import Page from './../../components/Page';
import ParkingSlots from './ParkingSlots';
import * as theme from '../../theme';
import styles from './Home.css.js';

const Home = ({navigation}) => {
  const {Marker} = MapView;
  const [active, setActive] = useState(null);
  const [hours, setHours] = useState(null);
  const [mapCoordinates, setMapCoordinates] = useState({});
  const parkingSlots = require('../../json/parkingSlots.json').data;

  useEffect(() => {
    setHours({ hours });
    console.log(mapCoordinates);
  }, []);
  
  const renderLocation = () => { 
    return (
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Current location</Text>
          <Text style={styles.headerLocation}>Salvador Street, Cebu City, Cebu</Text>
        </View>
        <View style={styles.headerIcon}>
          <TouchableWithoutFeedback>
            <IconAwe name="search" size={25} />
          </TouchableWithoutFeedback>
        </View>
      </View>
    )
  } 

  const renderParkingsDetails = () => {
    return (
      <FlatList 
        horizontal 
        pagingEnabled
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={theme.SIZES.iconSmall}
        snapToAlignment="center"
        style={styles.parkings}
        data={parkingSlots}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({item}) => {
          return (
            <ParkingSlots 
              parking={item} />
          )
        }} />
    )
  } 

  return (
    <Page 
      showHeader={true}
      showSetting={true}
      showFooter={false}
      showBack={false}>
      <View style={styles.content}>
        {renderLocation()}
        <View style={styles.inner}>
          <MapView
            initialRegion={{
              latitude: 10.300604179301217,
              longitude: 123.87386393829775,
              latitudeDelta: 0.0043,
              longitudeDelta: 0.0034
            }}
            showsUserLocation={true}
            onPress={e => setMapCoordinates(e.nativeEvent.coordinate)}
            style={styles.map}>
            {parkingSlots.map(parking =>
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
        {renderParkingsDetails()}
        </View>
      </View>
    </Page>
  );
};

export default Home;
