import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import IconAwe5 from 'react-native-vector-icons/FontAwesome5';
import Page from './../../components/Page';
import styles from './UserMenu.css';

const UserMenu = ({navigation}) => {
  return (
    <Page 
      showHeader={true}
      showSetting={true}
      showFooter={true}>
      <View style={styles.content}>
        <View style={styles.inner}>
          <View>
            <View style={styles.headingWrap}>
              <Text style={styles.heading}>Belle Jema Bantilan</Text>

              <View style={styles.settings}>
                <TouchableOpacity style={styles.item}>
                  <Text style={styles.icon}>
                    <Icon name="user" size={20} color="#c7c758" />
                  </Text> 
                  <Text style={styles.text}>
                    Personal Information 
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item}>
                  <Text style={styles.icon}>
                    <Icon name="location-pin" size={20} color="#fa7390" />
                  </Text> 
                  <Text style={styles.text}>
                    Location 
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item}>
                  <Text style={styles.icon}>
                    <Icon name="lock" size={20} color="#a19799" />
                  </Text> 
                  <Text style={styles.text}>
                    Security 
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item}>
                  <Text style={styles.icon}>
                    <IconAwe5 name="user-slash" size={20} color="#a19799" />
                  </Text> 
                  <Text style={styles.text}>
                    Blocking 
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View>
              <TouchableOpacity style={styles.item}>
                <Text style={styles.icon}>
                  <IconAwe5 name="user-friends" size={20} color="#59cf84" />
                </Text> 
                <Text style={styles.text}>
                  Friends
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.item}>
                <Text style={styles.icon}>
                  <IconAwe5 name="users" size={20} color="#3182de" />
                </Text> 
                <Text style={styles.text}>
                  Groups
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.item}>
                <Text style={styles.icon}>
                  <IconAwe5 name="calendar-alt" size={20} color="#943a3a" />
                </Text> 
                <Text style={styles.text}>
                  Events
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.item}>
                <Text style={styles.icon}>
                  <Icon name="folder-video" size={22} color="#58c7b6" />
                </Text> 
                <Text style={styles.text}>
                  Videos
                </Text>
              </TouchableOpacity>
              <TouchableOpacity 
                onPress={() => navigation.navigate('Login')}
                style={styles.item}>
                <Text style={styles.icon}>
                  <IconAwe5 name="door-open" size={20} color="#8fc0cf" />
                </Text> 
                <Text style={styles.text}>
                  Log Out
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Page>
  );
};

export default UserMenu;
