import React, {useState, useEffect} from 'react';
import {
  View, 
  Text,
  TouchableOpacity
} from 'react-native';
import {useNavigation, useNavigationState} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Entypo';
import IconAwe from 'react-native-vector-icons/FontAwesome';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import styles from './Menu.css';

const Menu = () => { 
  const navigation = useNavigation();
  const screenName = useNavigationState((state) => state.routes[state.index].name);

  const activeScreen = (name) => {
    return screenName === name ? [styles.item, styles.active] : styles.item;
  }

  return (
    <View style={styles.wrap}>
      <View style={styles.menu}>
        <TouchableOpacity 
          onPress={() => navigation.navigate('Home')}
          style={activeScreen('Home')}>
          <Text style={styles.text}>
            <Icon name="home" size={22} color="#fff" />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Search')}
          style={activeScreen('Search')}>
          <Text style={styles.text}>
            <IconAwe name="search" size={22} color="#fff" />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.text}>
            <Icon name="folder-video" size={22} color="#fff" />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Message')}
          style={activeScreen('Message')}>
          <Text style={styles.text}>
            <IconMaterial name="message" size={22} color="#fff" />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => navigation.navigate('Notifications')}
          style={activeScreen('Notifications')}>
          <Text style={styles.text}>
            <IconAwe name="bell" size={22} color="#fff" />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => navigation.navigate('UserMenu')}
          style={activeScreen('UserMenu')}>
          <Text style={styles.text}>
            <IconAwe name="user-circle-o" size={22} color="#fff" />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

Menu.defaultProps = {
  onPress: () => {},
  text: 'Submit'
};

Menu.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
};

export default Menu;
